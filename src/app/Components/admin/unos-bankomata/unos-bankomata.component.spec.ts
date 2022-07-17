import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosBankomataComponent } from './unos-bankomata.component';

describe('UnosBankomataComponent', () => {
  let component: UnosBankomataComponent;
  let fixture: ComponentFixture<UnosBankomataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosBankomataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnosBankomataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
