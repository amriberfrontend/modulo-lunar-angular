import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedTextarea } from './extended-textarea';

describe('ExtendedTextarea', () => {
  let component: ExtendedTextarea;
  let fixture: ComponentFixture<ExtendedTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedTextarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedTextarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
