import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview.component';
import { PreviewResolve } from './preview.resolve';

const routes: Routes = [
  {
    path: '',
    component: PreviewComponent,
    resolve: {
      init: PreviewResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewRoutingModule {}
