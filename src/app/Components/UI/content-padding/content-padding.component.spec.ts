import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPaddingComponent } from './content-padding.component';

describe('ContentPaddingComponent', () => {
  let component: ContentPaddingComponent;
  let fixture: ComponentFixture<ContentPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPaddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
