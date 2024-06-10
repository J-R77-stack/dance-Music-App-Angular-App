import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  music: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.getTopDeepHouseTracks();
  }

  getTopDeepHouseTracks() {
    this.musicService.getTopDeepHouseTracks().subscribe((data) => {
      this.music = data;
    });
  }
}
