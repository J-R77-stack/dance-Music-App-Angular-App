import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  constructor(private musicService: MusicService) {}
  music$ = this.musicService.getTopDeepHouseTracks();
}
