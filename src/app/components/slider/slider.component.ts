import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=sasha&api_key=17b2958025f35289d96cc353e38f3bb5&format=json'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
