import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-dekay-top-tracks',
  templateUrl: './dekay-top-tracks.component.html',
  styleUrl: './dekay-top-tracks.component.scss',
})
export class DekayTopTracksComponent {
  topTracks: any[] = [];
  artistId = '1ehDqG6bFGAurxlAJeQgNT';

  constructor(private spotifyAuth: SpotifyAuthService) {}

  ngOnInit(): void {
    this.spotifyAuth.getAccessToken().subscribe((token) => {
      if (token) {
        this.spotifyAuth
          .fetchArtistTopTracks(this.artistId)
          .subscribe((data: any) => {
            this.topTracks = data.tracks;
          });
      }
    });
  }
}
