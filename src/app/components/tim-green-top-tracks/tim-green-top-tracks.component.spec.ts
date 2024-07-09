import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimGreenTopTracksComponent } from './tim-green-top-tracks.component';

describe('TimGreenTopTracksComponent', () => {
  let component: TimGreenTopTracksComponent;
  let fixture: ComponentFixture<TimGreenTopTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimGreenTopTracksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimGreenTopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
