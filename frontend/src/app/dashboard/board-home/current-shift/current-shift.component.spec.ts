import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentShiftComponent } from './current-shift.component';

describe('CurrentShiftComponent', () => {
  let component: CurrentShiftComponent;
  let fixture: ComponentFixture<CurrentShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
