import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private _authService: AuthService;
  constructor(private _injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    this._authService = this._injector.get(AuthService);
    return this._authService.userState$.pipe(
      first(),
      concatMap((userState) => {
        if (userState.authenticated) {
          request = req.clone({
            setHeaders: {
              Authorization: `Bearer ${userState.token}`
            }
          });
        }

        return next.handle(request);
      })
    );
  }
}
