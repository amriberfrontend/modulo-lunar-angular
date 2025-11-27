import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedInput } from './extended-input';

describe('ExtendedInput', () => {
  let component: ExtendedInput;
  let fixture: ComponentFixture<ExtendedInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
