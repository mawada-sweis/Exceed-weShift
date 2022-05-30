import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeleteSalaryComponent } from './adddelete-salary.component';

describe('AdddeleteSalaryComponent', () => {
  let component: AdddeleteSalaryComponent;
  let fixture: ComponentFixture<AdddeleteSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddeleteSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeleteSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
