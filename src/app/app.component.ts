import { Component } from '@angular/core';
import { SpotifyAuthService } from './services/spotify-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'danceMusicApp';
  constructor(private spotifyAuth: SpotifyAuthService) {}

  authorize() {
    this.spotifyAuth.authorize();
  }
}
