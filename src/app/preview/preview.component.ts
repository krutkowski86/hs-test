import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { MusicPlaylist, MusicPlaylistData } from '../auth/services/music.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['id', 'author', 'title', 'image'];
  dataSource: MatTableDataSource<MusicPlaylistData>;

  constructor(private route: ActivatedRoute, private _cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.getRouteData().data);
    this._cd.detectChanges();
  }

  private getRouteData() {
    return this.route.snapshot.data.init as MusicPlaylist;
  }
}
