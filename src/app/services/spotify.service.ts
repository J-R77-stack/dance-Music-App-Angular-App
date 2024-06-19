import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';
  private accessToken =
    'BQCwuYHDE5ieA1qhVdR3pccpbPhOeLDv2RWOBvrtxKvwN8fCoQkXvI5nJodgebxaIE_DgUzvO7Rw7T2wVNZtV2-Pbp7FTD2h93uAxwXhH90V8xcuIFo'; // Replace with your Spotify access token

  constructor(private http: HttpClient) {}

  getArtistTopTracks(artistId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });
    const url = `${this.apiUrl}/artists/${artistId}/top-tracks?market=US`;
    return this.http
      .get(url, { headers })
      .pipe(map((response: any) => response.tracks));
  }
}
