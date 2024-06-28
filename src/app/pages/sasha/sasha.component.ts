import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-sasha',
  templateUrl: './sasha.component.html',
  styleUrl: './sasha.component.scss',
})
export class SashaComponent implements OnInit {
  artistId: string = '6u4jLGLPuarS3i2XWHVxoS'; // Replace with the desired artist ID
  topTracks: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.getTopTracks();
  }
  getTopTracks(): void {
    this.spotifyService.getArtistTopTracks(this.artistId).subscribe((data) => {
      this.topTracks = data;
    });
  }
}
