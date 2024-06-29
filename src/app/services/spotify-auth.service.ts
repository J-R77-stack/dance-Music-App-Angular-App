// spotify-auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthService {
  private clientId = '7a31dab292244ff9ac0a830ba5142c6f';
  private redirectUri = 'http://localhost:4200/callback';
  private authUrl = 'https://accounts.spotify.com/authorize';
  private tokenUrl = 'https://accounts.spotify.com/api/token';
  private accessToken = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  getAccessToken(): Observable<string | null> {
    return this.accessToken.asObservable();
  }

  authorize() {
    const params = new HttpParams({
      fromObject: {
        client_id: this.clientId,
        response_type: 'code',
        redirect_uri: this.redirectUri,
        scope: 'user-top-read',
      },
    });
    window.location.href = `${this.authUrl}?${params.toString()}`;
  }

  fetchAccessToken(code: string) {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId)
      .set('client_secret', 'ed9a7e5e69344096af6a5a7667cc40af');

    this.http
      .post(this.tokenUrl, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe((response: any) => {
        this.accessToken.next(response.access_token);
        this.router.navigate(['/']);
      });
  }
}
