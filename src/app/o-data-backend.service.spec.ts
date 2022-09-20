import { TestBed } from '@angular/core/testing';

import { ODataBackendService } from './o-data-backend.service';

describe('ODataBackendService', () => {
  let service: ODataBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ODataBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
