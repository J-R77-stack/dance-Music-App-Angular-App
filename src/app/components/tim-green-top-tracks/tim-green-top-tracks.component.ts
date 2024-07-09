import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-tim-green-top-tracks',
  templateUrl: './tim-green-top-tracks.component.html',
  styleUrl: './tim-green-top-tracks.component.scss',
})
export class TimGreenTopTracksComponent {
  topTracks: any[] = [];
  artistId = '68vO4fkFxLbWPxTSHosxsB';

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
