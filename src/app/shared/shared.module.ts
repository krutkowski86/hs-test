import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialDesignModule } from './modules/material-design/material-design.module';

@NgModule({
  exports: [CommonModule, MaterialDesignModule]
})
export class SharedModule {}
