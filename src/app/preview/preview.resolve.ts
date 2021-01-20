import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { MusicService } from '../auth/services/music.service';

@Injectable()
export class PreviewResolve implements Resolve<any> {
  constructor(private _musicService: MusicService) {}

  resolve() {
    return this._musicService.playlist();
  }
}
