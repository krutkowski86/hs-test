import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface MusicPlaylist {
  lastId: number;
  data: MusicPlaylistData[];
}

export interface MusicPlaylistData {
  id: number;
  title: string;
  author: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private _http: HttpClient) {}

  playlist(): Observable<MusicPlaylist> {
    return this.getPlaylist().pipe(
      map((playlistData) => {
        const lastId = playlistData[playlistData.length - 1].id;
        return {
          lastId,
          data: playlistData
        };
      })
    );
  }

  private getPlaylist() {
    return this._http.get<MusicPlaylistData[]>(`${environment.api}/playlist`);
  }
}
