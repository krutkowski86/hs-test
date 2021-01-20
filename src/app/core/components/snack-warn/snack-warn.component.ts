import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-warn',
  templateUrl: './snack-warn.component.html',
  host: {
    '(click)': 'onClickDismiss()',
    class: 'snack-component'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackWarnComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { header: string; msg?: string },
    public snackBarRef: MatSnackBarRef<SnackWarnComponent>
  ) {}

  onClickDismiss() {
    this.snackBarRef.dismiss();
  }
}
