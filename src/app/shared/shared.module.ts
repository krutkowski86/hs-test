import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from './modules/material-design/material-design.module';

@NgModule({
  exports: [CommonModule, RouterModule, MaterialDesignModule, ReactiveFormsModule, HttpClientModule]
})
export class SharedModule {}
