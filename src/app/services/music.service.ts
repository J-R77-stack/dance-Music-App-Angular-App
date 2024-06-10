import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  getTopDeepHouseTracks() {
    return this.http.get(
      'https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=deephouse&api_key=17b2958025f35289d96cc353e38f3bb5&format=json'
    );
  }
}
