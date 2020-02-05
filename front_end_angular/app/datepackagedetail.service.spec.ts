import { TestBed } from '@angular/core/testing';

import { DatepackagedetailService } from './datepackagedetail.service';

describe('DatepackagedetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatepackagedetailService = TestBed.get(DatepackagedetailService);
    expect(service).toBeTruthy();
  });
});
