import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDriverComponent } from './auth-driver.component';

describe('AuthDriverComponent', () => {
  let component: AuthDriverComponent;
  let fixture: ComponentFixture<AuthDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
