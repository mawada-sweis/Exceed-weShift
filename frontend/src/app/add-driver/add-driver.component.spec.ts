import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDDRIVErComponent } from './add-driver.component';

describe('ADDDRIVErComponent', () => {
  let component: ADDDRIVErComponent;
  let fixture: ComponentFixture<ADDDRIVErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDDRIVErComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDDRIVErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
