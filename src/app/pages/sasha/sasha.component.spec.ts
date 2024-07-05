import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SashaComponent } from './sasha.component';

describe('SashaComponent', () => {
  let component: SashaComponent;
  let fixture: ComponentFixture<SashaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SashaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
