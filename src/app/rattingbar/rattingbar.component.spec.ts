import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RattingbarComponent } from './rattingbar.component';

describe('RattingbarComponent', () => {
  let component: RattingbarComponent;
  let fixture: ComponentFixture<RattingbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RattingbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RattingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
