import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerCenterComponent } from './form-container-center.component';

describe('FormContainerCenterComponent', () => {
  let component: FormContainerCenterComponent;
  let fixture: ComponentFixture<FormContainerCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContainerCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContainerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
