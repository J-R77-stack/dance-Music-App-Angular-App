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
    'BQCqInqOzyk2q7V7VLa5J_k2id82UNWe2Zc-spoggiIlSqzU9bmCQ1ZHu8HZySwvHcRDHr2ox4pRLij9DlGPHvC8aNoeM4Jnkqi_8gD0GI9_tVyPaiE'; // Replace with your Spotify access token

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
  getTrackById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });
    const url = `${this.apiUrl}/tracks/${id}?market=US`;
    return this.http.get(url, { headers });
  }
}
