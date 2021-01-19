import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: boolean;

  constructor() {}

  login() {
    return this.loginUser().pipe(tap(() => (this.authenticated = true)));
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private loginUser() {
    return of(true);
  }
}
