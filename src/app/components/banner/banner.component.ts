import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  // artistId: string = '0334oJHhRSKJRHKpE9i62h'; // Replace with the desired artist ID
  // topTracks: any[] = [];
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

//   ngOnInit() {
//     this.getTopTracks();
//   }
//   getTopTracks(): void {
//     this.spotifyService.getArtistTopTracks(this.artistId).subscribe((data) => {
//       this.topTracks = data;
//     });
//   }
// }
