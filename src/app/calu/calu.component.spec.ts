import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluComponent } from './calu.component';

describe('CaluComponent', () => {
  let component: CaluComponent;
  let fixture: ComponentFixture<CaluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
