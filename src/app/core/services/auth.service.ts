import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

interface UserState {
  authenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userStateSource = new BehaviorSubject<UserState>({ authenticated: false });
  userState$ = this.userStateSource.asObservable();

  constructor() {}

  login() {
    return this.loginUserRequest().pipe(tap(() => this.userStateSource.next({ authenticated: true })));
  }

  logout() {
    return this.logoutUserRequest().pipe(tap(() => this.userStateSource.next({ authenticated: false })));
  }

  isAuthenticated() {
    return this.userState$.pipe(
      first(),
      map(({ authenticated }) => authenticated)
    );
  }

  private loginUserRequest() {
    return of(true);
  }

  private logoutUserRequest() {
    return of(true);
  }
}
