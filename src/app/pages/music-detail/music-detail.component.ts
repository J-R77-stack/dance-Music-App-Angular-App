import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrl: './music-detail.component.scss',
})
export class MusicDetailComponent implements OnInit {
  trackId = '';

  track$: Observable<any> | null = null;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    // this.router.params.subscribe((params) => {
    //   this.showId = params['id'];
    // });

    this.trackId = this.router.snapshot.params['id'];
    this.track$ = this.spotifyService.getTrackById(this.trackId);
  }
}
