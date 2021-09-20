import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperLowerButtonComponent } from './upper-lower-button.component';

describe('UpperLowerButtonComponent', () => {
  let component: UpperLowerButtonComponent;
  let fixture: ComponentFixture<UpperLowerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperLowerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperLowerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
