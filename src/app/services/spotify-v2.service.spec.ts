import { TestBed } from '@angular/core/testing';

import { SpotifyV2Service } from './spotify-v2.service';

describe('SpotifyV2Service', () => {
  let service: SpotifyV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
