import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { SnackService } from '../services/snack.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _authService: AuthService, private _router: Router, private _snackService: SnackService) {}

  canLoad() {
    return this.isAuthenticated('canLoad').pipe(
      tap(this.snackOnFalse.bind(this)),
      concatMap(this.loginOnFalse.bind(this))
    );
  }

  canActivate() {
    return this.isAuthenticated('canActivate').pipe(
      tap(this.snackOnFalse.bind(this)),
      concatMap(this.loginOnFalse.bind(this))
    );
  }

  private isAuthenticated(guardType: string) {
    return this._authService
      .isAuthenticated()
      .pipe(tap((authenticated) => console.warn(`[AuthGuard ${guardType}] Authenticated: ${authenticated}`)));
  }

  private loginOnFalse(authenticated: boolean) {
    return authenticated ? of(true) : of(this._router.createUrlTree(['/login']));
  }

  private snackOnFalse(authenticated) {
    console.log(authenticated);
    if (!authenticated) {
      console.log('not');
      this._snackService.warnMsg('User not authenticated');
    }
  }
}
