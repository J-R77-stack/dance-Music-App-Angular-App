import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  artistId: string = '68vO4fkFxLbWPxTSHosxsB'; // Replace with the desired artist ID
  topTracks: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getTopTracks();
  }

  getTopTracks(): void {
    this.spotifyService.getArtistTopTracks(this.artistId).subscribe((data) => {
      this.topTracks = data;
    });
  }
}
