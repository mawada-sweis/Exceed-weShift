import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHomeComponent } from './board-home.component';

describe('BoardHomeComponent', () => {
  let component: BoardHomeComponent;
  let fixture: ComponentFixture<BoardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
