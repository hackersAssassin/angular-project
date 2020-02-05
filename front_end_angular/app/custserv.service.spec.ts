import { TestBed } from '@angular/core/testing';

import { CustservService } from './custserv.service';

describe('CustservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustservService = TestBed.get(CustservService);
    expect(service).toBeTruthy();
  });
});
