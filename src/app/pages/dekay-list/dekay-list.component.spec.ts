import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DekayListComponent } from './dekay-list.component';

describe('DekayListComponent', () => {
  let component: DekayListComponent;
  let fixture: ComponentFixture<DekayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DekayListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DekayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
