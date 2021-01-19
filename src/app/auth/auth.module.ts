import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFeatureComponent } from './auth-feature/auth-feature.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthFeatureComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
