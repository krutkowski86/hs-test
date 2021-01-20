import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  authenticated: boolean;
  constructor(private _authService: AuthService, private _router: Router, private _cd: ChangeDetectorRef) {}

  ngOnInit() {
    this._authService.userState$.subscribe(({ authenticated }) => {
      this.authenticated = authenticated;
      this._cd.detectChanges();
    });
  }

  logout() {
    this._authService.logout().subscribe((out) => {
      if (out) {
        this._router.navigate(['/login']);
      }
    });
  }
}
