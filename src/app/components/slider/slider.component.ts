import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { MusicDto } from '../../types/music';

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
    setInterval(() => {
      this.slideIndex += 1;
    }, 5000);
  }

  getTopTracks(): void {
    this.spotifyService.getArtistTopTracks(this.artistId).subscribe((data) => {
      this.topTracks = data;
    });
  }

  slideIndex = 0;
}
