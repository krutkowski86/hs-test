import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PreviewRoutingModule } from './preview-routing.module';
import { PreviewComponent } from './preview.component';
import { PreviewResolve } from './preview.resolve';

@NgModule({
  declarations: [PreviewComponent],
  providers: [PreviewResolve],
  imports: [SharedModule, PreviewRoutingModule]
})
export class PreviewModule {}
