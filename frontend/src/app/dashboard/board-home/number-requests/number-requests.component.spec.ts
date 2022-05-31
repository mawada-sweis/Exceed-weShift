import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRequestsComponent } from './number-requests.component';

describe('NumberRequestsComponent', () => {
  let component: NumberRequestsComponent;
  let fixture: ComponentFixture<NumberRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
