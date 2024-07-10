import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSashaComponent } from './slider-sasha.component';

describe('SliderSashaComponent', () => {
  let component: SliderSashaComponent;
  let fixture: ComponentFixture<SliderSashaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderSashaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderSashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
