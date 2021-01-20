import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
  constructor() {}

  getPlaylist(): Observable<MusicPlaylist> {
    const data: MusicPlaylistData[] = [
      {
        id: 1,
        title: 'Only Time',
        author: 'Enya',
        image:
          'https://img.discogs.com/DqYFB6-M_6uqsqxyT5s-JsZD2B8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2029801-1291343319.jpeg.jpg'
      },
      {
        id: 2,
        title: 'Thriller',
        author: 'Michael Jackson',
        image:
          'https://img.discogs.com/Ib2HQses5l1RnIWanX6MsyDisGY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2911293-1594245812-7931.jpeg.jpg'
      },
      {
        id: 3,
        title: 'Down With The Sickness',
        author: 'Disturbed',
        image:
          'https://img.discogs.com/7aGE40fVIr86N2QKEvPfipK2gTQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-367455-1159401116.jpeg.jpg'
      }
    ];

    return of(data).pipe(
      map((playlistData) => {
        const lastId = playlistData[playlistData.length - 1].id;
        return {
          lastId,
          data: playlistData
        };
      })
    );
  }
}
