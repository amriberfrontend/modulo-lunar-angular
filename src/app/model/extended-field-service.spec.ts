import { TestBed } from '@angular/core/testing';

import { ExtendedFieldService } from './extended-field-service';

describe('ExtendedFieldService', () => {
  let service: ExtendedFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtendedFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
