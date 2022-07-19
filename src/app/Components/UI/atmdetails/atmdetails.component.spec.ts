import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMDetailsComponent } from './atmdetails.component';

describe('ATMDetailsComponent', () => {
  let component: ATMDetailsComponent;
  let fixture: ComponentFixture<ATMDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATMDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATMDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
