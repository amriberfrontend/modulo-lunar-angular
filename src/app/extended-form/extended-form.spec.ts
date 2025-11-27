import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedForm } from './extended-form';

describe('ExtendedForm', () => {
  let component: ExtendedForm;
  let fixture: ComponentFixture<ExtendedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
