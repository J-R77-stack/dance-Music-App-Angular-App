import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DekayTopTracksComponent } from './dekay-top-tracks.component';

describe('DekayTopTracksComponent', () => {
  let component: DekayTopTracksComponent;
  let fixture: ComponentFixture<DekayTopTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DekayTopTracksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DekayTopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
