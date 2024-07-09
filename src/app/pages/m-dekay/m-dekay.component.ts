import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-m-dekay',
  templateUrl: './m-dekay.component.html',
  styleUrl: './m-dekay.component.scss',
})
export class MDekayComponent {
  playlistItems: any[] = [];
  playlistId = '6wyh9ILdeSXqngbtWlGP4x';

  constructor(private spotifyAuth: SpotifyAuthService) {}

  ngOnInit(): void {
    this.spotifyAuth.getAccessToken().subscribe((token) => {
      if (token) {
        this.spotifyAuth
          .fetchArtistPlaylists(this.playlistId)
          .subscribe((data: any) => {
            this.playlistItems = data.items;
          });
      }
    });
  }
}
