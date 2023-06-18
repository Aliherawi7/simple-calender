import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderTableComponent } from './calender-table.component';

describe('CalenderTableComponent', () => {
  let component: CalenderTableComponent;
  let fixture: ComponentFixture<CalenderTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalenderTableComponent]
    });
    fixture = TestBed.createComponent(CalenderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
