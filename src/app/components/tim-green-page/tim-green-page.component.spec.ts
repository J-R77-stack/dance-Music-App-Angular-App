import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimGreenPageComponent } from './tim-green-page.component';

describe('TimGreenPageComponent', () => {
  let component: TimGreenPageComponent;
  let fixture: ComponentFixture<TimGreenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimGreenPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimGreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
