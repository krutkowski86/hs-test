import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from './modules/material-design/material-design.module';

@NgModule({
  exports: [CommonModule, RouterModule, MaterialDesignModule, ReactiveFormsModule]
})
export class SharedModule {}
