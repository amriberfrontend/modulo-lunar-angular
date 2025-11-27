import { TestBed } from '@angular/core/testing';

import { SelectData } from './select-data';

describe('SelectData', () => {
  let service: SelectData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
