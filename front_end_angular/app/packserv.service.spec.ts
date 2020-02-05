import { TestBed } from '@angular/core/testing';

import { PackservService } from './packserv.service';

describe('PackservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackservService = TestBed.get(PackservService);
    expect(service).toBeTruthy();
  });
});
