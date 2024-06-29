import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyAuthService } from './spotify-auth.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyV2Service {
  private apiUrl = 'https://api.spotify.com/v1';
  constructor(
    private http: HttpClient,
    private spotifyAuth: SpotifyAuthService
  ) {}

  getTopTracks(artistId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.spotifyAuth.getAccessToken()}`,
    });
    return this.http.get(
      `${this.apiUrl}/artists/${artistId}/top-tracks?market=US`,
      { headers }
    );
  }
}
