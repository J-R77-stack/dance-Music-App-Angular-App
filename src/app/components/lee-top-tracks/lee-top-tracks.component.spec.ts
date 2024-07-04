import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeTopTracksComponent } from './lee-top-tracks.component';

describe('LeeTopTracksComponent', () => {
  let component: LeeTopTracksComponent;
  let fixture: ComponentFixture<LeeTopTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeeTopTracksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeeTopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
