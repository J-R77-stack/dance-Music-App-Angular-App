import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGreenComponent } from './slider-green.component';

describe('SliderGreenComponent', () => {
  let component: SliderGreenComponent;
  let fixture: ComponentFixture<SliderGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderGreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
