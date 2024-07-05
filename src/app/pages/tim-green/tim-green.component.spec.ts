import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimGreenComponent } from './tim-green.component';

describe('TimGreenComponent', () => {
  let component: TimGreenComponent;
  let fixture: ComponentFixture<TimGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimGreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
