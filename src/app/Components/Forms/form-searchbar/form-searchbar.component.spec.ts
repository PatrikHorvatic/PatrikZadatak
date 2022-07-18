import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchbarComponent } from './form-searchbar.component';

describe('FormSearchbarComponent', () => {
  let component: FormSearchbarComponent;
  let fixture: ComponentFixture<FormSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
