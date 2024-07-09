import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SashaTopTracksComponent } from './sasha-top-tracks.component';

describe('SashaTopTracksComponent', () => {
  let component: SashaTopTracksComponent;
  let fixture: ComponentFixture<SashaTopTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SashaTopTracksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SashaTopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
