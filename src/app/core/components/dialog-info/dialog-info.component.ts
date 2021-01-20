import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogInfoData {
  title: string;
  msg?: string;
}

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogInfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInfoData) {}
}
