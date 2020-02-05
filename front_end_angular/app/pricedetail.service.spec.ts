import { TestBed } from '@angular/core/testing';

import { PricedetailService } from './pricedetail.service';

describe('PricedetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PricedetailService = TestBed.get(PricedetailService);
    expect(service).toBeTruthy();
  });
});
