import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledBankomataNaKartiComponent } from './pregled-bankomata-na-karti.component';

describe('PregledBankomataNaKartiComponent', () => {
  let component: PregledBankomataNaKartiComponent;
  let fixture: ComponentFixture<PregledBankomataNaKartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledBankomataNaKartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregledBankomataNaKartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
