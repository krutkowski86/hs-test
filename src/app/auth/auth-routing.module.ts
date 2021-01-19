import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFeatureComponent } from './auth-feature/auth-feature.component';

const routes: Routes = [
  {
    path: '',
    component: AuthFeatureComponent,
    children: [
      {
        path: 'post',
        loadChildren: () =>
          import('src/app/post/post.module').then((m) => m.PostModule),
      },
      {
        path: 'preview',
        loadChildren: () =>
          import('src/app/preview/preview.module').then((m) => m.PreviewModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
