import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-tim-green-page',
  templateUrl: './tim-green-page.component.html',
  styleUrl: './tim-green-page.component.scss',
})
export class TimGreenPageComponent implements OnInit {
  playlistItems: any[] = [];
  playlistId = '6IgN81Bb7XbnPcTSPkXG8F';

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
