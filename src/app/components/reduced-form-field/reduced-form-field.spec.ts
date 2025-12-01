import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducedFormField } from './reduced-form-field';

describe('ReducedFormField', () => {
  let component: ReducedFormField;
  let fixture: ComponentFixture<ReducedFormField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReducedFormField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReducedFormField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
