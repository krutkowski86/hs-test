import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [SharedModule, PostRoutingModule]
})
export class PostModule {}
