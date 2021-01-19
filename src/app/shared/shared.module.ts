import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from './modules/material-design/material-design.module';

@NgModule({
  exports: [CommonModule, MaterialDesignModule, ReactiveFormsModule]
})
export class SharedModule {}
