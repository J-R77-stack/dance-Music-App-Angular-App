import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-sasha-page',
  templateUrl: './sasha-page.component.html',
  styleUrl: './sasha-page.component.scss',
})
export class SashaPageComponent implements OnInit {
  playlistItems: any[] = [];
  playlistId = '4LPwxsUoL1WmrxhpLhyXey';

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
