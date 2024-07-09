import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDekayComponent } from './m-dekay.component';

describe('MDekayComponent', () => {
  let component: MDekayComponent;
  let fixture: ComponentFixture<MDekayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MDekayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MDekayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
