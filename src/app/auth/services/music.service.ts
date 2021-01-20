import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
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
  private static PLAYLIST_URL = '/playlist';
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

  addPlaylistTrack(author: string, title: string, image: string) {
    return this.playlist().pipe(
      map((data) => ++data.lastId),
      concatMap((lastId) => this.postPlaylistTrack(lastId, author, title, image))
    );
  }

  private getPlaylist() {
    return this._http.get<MusicPlaylistData[]>(`${environment.api}${MusicService.PLAYLIST_URL}`);
  }

  private postPlaylistTrack(id: number, author: string, title: string, image: string) {
    return this._http.post(
      `${environment.api}${MusicService.PLAYLIST_URL}`,
      {
        id,
        author,
        title,
        image
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
