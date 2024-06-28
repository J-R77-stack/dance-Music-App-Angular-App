import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sasha-list',
  templateUrl: './sasha-list.component.html',
  styleUrl: './sasha-list.component.scss'
})
export class SashaListComponent {
  trackId = '';
  artist: any;

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
