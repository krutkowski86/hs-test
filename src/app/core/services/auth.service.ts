import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean;

  constructor() {}

  login() {
    return this.loginUser().pipe(tap(() => (this.authenticated = true)));
  }

  isAuthenticated() {
    return of(!!this.authenticated);
  }

  private loginUser() {
    return of(true);
  }
}
