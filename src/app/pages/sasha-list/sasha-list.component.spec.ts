import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SashaListComponent } from './sasha-list.component';

describe('SashaListComponent', () => {
  let component: SashaListComponent;
  let fixture: ComponentFixture<SashaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SashaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SashaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
