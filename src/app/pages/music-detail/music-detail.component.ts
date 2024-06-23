import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrl: './music-detail.component.scss',
})
export class MusicDetailComponent implements OnInit {
  showId = 0;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log(params);
      this.showId = params['id'];
    });
  }
}
