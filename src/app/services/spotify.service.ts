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
    'BQCci8v_hair7GFEfUhfVTRPs952YaioKdM4jgvC3MYPwxGtVQfet2m6RTJPTJVcv8JCs2yK6vMmw8EHhzsXCrm0JZsERZk6sOSN-fBbMudvjl-Yy80'; // Replace with your Spotify access token

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
