import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    return this.isAuthenticated('canActivate').pipe(concatMap(this.authOnTrue.bind(this)));
  }

  private isAuthenticated(guardType: string) {
    return this._authService
      .isAuthenticated()
      .pipe(tap((authenticated) => console.warn(`[LoginGuard ${guardType}] Authenticated: ${authenticated}`)));
  }

  private authOnTrue(authenticated: boolean) {
    return authenticated ? of(this._router.createUrlTree(['/'])) : of(true);
  }
}
