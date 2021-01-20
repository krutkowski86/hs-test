import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'post',
        loadChildren: () => import('src/app/post/post.module').then((m) => m.PostModule)
      },
      {
        path: 'preview',
        loadChildren: () => import('src/app/preview/preview.module').then((m) => m.PreviewModule)
      },
      {
        path: '',
        redirectTo: 'preview',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
