import { Component, OnInit } from '@angular/core';
import { SpotifyV2Service } from '../../services/spotify-v2.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrl: './top-tracks.component.scss',
})
export class TopTracksComponent implements OnInit {
  topTracks: any[] = [];

  constructor(
    private spotifyV2Service: SpotifyV2Service,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const artistId = '3bVYqr2NfmwmL4YJisWhJI'; // Replace with the artist ID you want to display
    this.spotifyV2Service.getTopTracks(artistId).subscribe(
      (data) => {
        this.topTracks = data.tracks;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
