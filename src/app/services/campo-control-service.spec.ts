import { TestBed } from '@angular/core/testing';

import { CampoControlService } from './campo-control-service';

describe('CampoControlService', () => {
  let service: CampoControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampoControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
