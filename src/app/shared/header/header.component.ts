import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private spotifyAuth: SpotifyAuthService,
   
  ) {}
  authorize() {
    this.spotifyAuth.authorize();
  }

 
}
