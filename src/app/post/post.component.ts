import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';

import { MusicService } from '../auth/services/music.service';
import { DialogService } from '../core/services/dialog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  postForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _musicService: MusicService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.postForm = this._formBuilder.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const { title, author, image } = this.postForm.getRawValue();
      this._musicService
        .addPlaylistTrack(author, title, image)
        .pipe(
          concatMap(() => this._dialogService.info('Success', 'New track added to your playlist')),
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          this.postForm.reset();
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
