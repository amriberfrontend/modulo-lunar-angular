import { TestBed } from '@angular/core/testing';

import { InputDataFactory } from './input-data-factory';

describe('InputDataFactory', () => {
  let service: InputDataFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputDataFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
