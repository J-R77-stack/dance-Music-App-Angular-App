import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDekayComponent } from './slider-dekay.component';

describe('SliderDekayComponent', () => {
  let component: SliderDekayComponent;
  let fixture: ComponentFixture<SliderDekayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderDekayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderDekayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
