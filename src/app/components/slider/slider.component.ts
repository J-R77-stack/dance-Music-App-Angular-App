import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  topDeepHouseTracks: any[] = [];
  // topSashaTracks: any[] = [];
  // artistInfo: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.getTopDeepHouseTracks().subscribe((data) => {
      this.topDeepHouseTracks = data.tracks.track;
    });

    // this.musicService.getTopSashaTracks().subscribe((data) => {
    //   this.topSashaTracks = data.toptracks.track;
    // });

    // this.musicService.getArtistInfo('artist: sasha').subscribe((data) => {
    //   this.artistInfo = data.artist;
    // });
  }
}
