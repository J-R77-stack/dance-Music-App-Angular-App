import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// export class MusicService {
//   constructor(private http: HttpClient) {}

//   getTopDeepHouseTracks() {
//     return this.http.get<any>(
//       'https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=deephouse&api_key=17b2958025f35289d96cc353e38f3bb5&format=json'
//     );
//   }
// }
export class MusicService {
  private apiKey: string = '17b2958025f35289d96cc353e38f3bb5';
  private apiUrl: string = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private http: HttpClient) {}

  getTopDeepHouseTracks(): Observable<any> {
    const url = `${this.apiUrl}?method=tag.gettoptracks&tag=deephouse&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }

  getTopSashaTracks(): Observable<any> {
    const url = `${this.apiUrl}?method=artist.gettoptracks&artist=sasha&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }

  getArtistInfo(artist: string): Observable<any> {
    const url = `${this.apiUrl}?method=artist.getinfo&artist=${artist}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }
}
