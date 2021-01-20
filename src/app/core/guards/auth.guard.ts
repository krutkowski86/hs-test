import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _authService: AuthService, private _router: Router) {}

  canLoad() {
    return this.isAuthenticated('canLoad').pipe(concatMap(this.loginOnFalse.bind(this)));
  }

  canActivate() {
    return this.isAuthenticated('canActivate').pipe(concatMap(this.loginOnFalse.bind(this)));
  }

  private isAuthenticated(guardType: string) {
    return this._authService
      .isAuthenticated()
      .pipe(tap((authenticated) => console.warn(`[${guardType}] Authenticated: ${authenticated}`)));
  }

  private loginOnFalse(authenticated: boolean) {
    return authenticated ? of(true) : of(this._router.createUrlTree(['/login']));
  }
}
