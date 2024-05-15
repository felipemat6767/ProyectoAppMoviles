import { TestBed } from '@angular/core/testing';

import { NombreServiceService } from './nombre-service.service';

describe('NombreServiceService', () => {
  let service: NombreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
