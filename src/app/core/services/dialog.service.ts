import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../components/dialog-info/dialog-info.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private _matDialog: MatDialog) {}

  info(title: string, msg: string) {
    return this._matDialog
      .open(DialogInfoComponent, {
        data: {
          title,
          msg
        },
        minHeight: 200,
        minWidth: 200
      })
      .afterClosed();
  }
}
