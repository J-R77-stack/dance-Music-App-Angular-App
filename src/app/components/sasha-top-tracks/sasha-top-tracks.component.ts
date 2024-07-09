import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-sasha-top-tracks',
  templateUrl: './sasha-top-tracks.component.html',
  styleUrl: './sasha-top-tracks.component.scss',
})
export class SashaTopTracksComponent {
  topTracks: any[] = [];
  artistId = '6u4jLGLPuarS3i2XWHVxoS';

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
