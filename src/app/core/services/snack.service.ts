import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { SnackWarnComponent } from '../components/snack-warn/snack-warn.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  private static DURATION = 5000;
  private static VERTICAL_POSITION: MatSnackBarVerticalPosition = 'bottom';
  private static HORIZONTAL_POSITION: MatSnackBarHorizontalPosition = 'right';

  constructor(private _snackBar: MatSnackBar) {}

  warnMsg(header: string, msg?: string) {
    const config = new MatSnackBarConfig();
    config.data = { header, msg };
    config.verticalPosition = SnackService.VERTICAL_POSITION;
    config.horizontalPosition = SnackService.HORIZONTAL_POSITION;
    config.duration = SnackService.DURATION;
    config.panelClass = 'snack-bar-warn';
    this._snackBar.openFromComponent(SnackWarnComponent, config);
  }
}
