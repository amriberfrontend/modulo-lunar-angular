import { TestBed } from '@angular/core/testing';

import { InputData } from './input-data';

describe('InputData', () => {
  let service: InputData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
