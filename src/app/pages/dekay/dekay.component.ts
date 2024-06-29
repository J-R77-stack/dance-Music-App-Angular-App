import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-dekay',
  templateUrl: './dekay.component.html',
  styleUrl: './dekay.component.scss',
})
export class DekayComponent implements OnInit {
  artistId: string = '1ehDqG6bFGAurxlAJeQgNT'; // Replace with the desired artist ID
  topTracks: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.getTopTracks();
  }
  getTopTracks(): void {
    this.spotifyService.getArtistTopTracks(this.artistId).subscribe((data) => {
      this.topTracks = data;
    });
  }
}
