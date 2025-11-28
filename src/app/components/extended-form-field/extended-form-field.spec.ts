import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFormField } from './extended-form-field';

describe('ExtendedFormField', () => {
  let component: ExtendedFormField;
  let fixture: ComponentFixture<ExtendedFormField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedFormField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedFormField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
