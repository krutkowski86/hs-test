import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface UserState {
  authenticated: boolean;
  token?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userStateSource = new BehaviorSubject<UserState>(this.getDefaultUserState());
  userState$ = this.userStateSource.asObservable();

  constructor(private _http: HttpClient) {}

  login(email: string, password: string) {
    return this.loginUserRequest(email, password).pipe(
      tap(({ jwt }) => {
        sessionStorage.setItem('token', jwt);
        this.userStateSource.next({ authenticated: true, token: jwt });
      })
    );
  }

  logout() {
    return this.logoutUserRequest().pipe(
      tap(() => {
        sessionStorage.clear();
        this.userStateSource.next({ authenticated: false });
      })
    );
  }

  isAuthenticated() {
    return this.userState$.pipe(
      first(),
      map(({ authenticated }) => authenticated)
    );
  }

  private getDefaultUserState(): UserState {
    const token = sessionStorage.getItem('token');

    return !!token
      ? {
          authenticated: true,
          token
        }
      : {
          authenticated: false
        };
  }

  private loginUserRequest(email: string, password: string) {
    return this._http.post<{ jwt: string }>(
      `${environment.api}/user/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  private logoutUserRequest() {
    return of(true);
  }
}
