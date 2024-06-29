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
    'BQBwZxUl-SEgqv7B92GjYf-BFoolC5tyf9O-hoTvOCUISMny567QqbcUgGFLbcZoacnFtG-E5eD-v49DaY5YD-uh9lNa56uycv8vkchVzJv-Mii6dPw'; // Replace with your Spotify access token

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
