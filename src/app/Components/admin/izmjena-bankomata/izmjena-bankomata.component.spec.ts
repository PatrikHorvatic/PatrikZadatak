import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmjenaBankomataComponent } from './izmjena-bankomata.component';

describe('IzmjenaBankomataComponent', () => {
  let component: IzmjenaBankomataComponent;
  let fixture: ComponentFixture<IzmjenaBankomataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmjenaBankomataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzmjenaBankomataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
