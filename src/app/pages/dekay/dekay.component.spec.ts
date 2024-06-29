import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DekayComponent } from './dekay.component';

describe('DekayComponent', () => {
  let component: DekayComponent;
  let fixture: ComponentFixture<DekayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DekayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DekayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
