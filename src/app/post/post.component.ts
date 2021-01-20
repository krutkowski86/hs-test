import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicService } from '../auth/services/music.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _musicService: MusicService, private _cd: ChangeDetectorRef) {}

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
      this._musicService.addPlaylistTrack(author, title, image).subscribe((response) => {
        this.postForm.reset();
      });
    }
  }
}
