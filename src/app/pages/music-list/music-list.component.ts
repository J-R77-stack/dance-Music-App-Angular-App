import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
})
export class MusicListComponent implements OnInit {
  artistId: string = '68vO4fkFxLbWPxTSHosxsB'; // Replace with the desired artist ID
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
