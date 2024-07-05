import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SashaPageComponent } from './sasha-page.component';

describe('SashaPageComponent', () => {
  let component: SashaPageComponent;
  let fixture: ComponentFixture<SashaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SashaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SashaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
