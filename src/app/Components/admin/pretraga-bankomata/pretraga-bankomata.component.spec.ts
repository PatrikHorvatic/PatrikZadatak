import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaBankomataComponent } from './pretraga-bankomata.component';

describe('PretragaBankomataComponent', () => {
  let component: PretragaBankomataComponent;
  let fixture: ComponentFixture<PretragaBankomataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretragaBankomataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretragaBankomataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
