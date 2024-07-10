import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';
import {
  state,
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-slider-dekay',
  templateUrl: './slider-dekay.component.html',
  styleUrl: './slider-dekay.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderDekayComponent implements OnInit {
  playlistItems: any[] = [];
  playlistId = '37i9dQZF1DZ06evO0FqnwB';

  constructor(private spotifyAuth: SpotifyAuthService) {}

  ngOnInit(): void {
    this.changeSlide();
  }

  changeSlide() {
    this.getplaylist();
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 9) {
        this.slideIndex = 0;
      }
    }, 5000);
  }

  getplaylist(): void {
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

  slideIndex = 0;
}
