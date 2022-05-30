import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCustomersComponent } from './active-customers.component';

describe('ActiveCustomersComponent', () => {
  let component: ActiveCustomersComponent;
  let fixture: ComponentFixture<ActiveCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
