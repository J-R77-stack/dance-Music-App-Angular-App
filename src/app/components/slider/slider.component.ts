import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {
  state,
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  artistId: string = '0334oJHhRSKJRHKpE9i62h'; // Replace with the desired artist ID
  topTracks: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.changeSlide();
  }

  changeSlide() {
    this.getTopTracks();
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 9) {
        this.slideIndex = 0;
      }
    }, 5000);
  }

  getTopTracks(): void {
    this.spotifyService.getArtistTopTracks(this.artistId).subscribe((data) => {
      this.topTracks = data;
    });
  }

  slideIndex = 0;
}
