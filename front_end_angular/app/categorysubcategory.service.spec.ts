import { TestBed } from '@angular/core/testing';

import { CategorysubcategoryService } from './categorysubcategory.service';

describe('CategorysubcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorysubcategoryService = TestBed.get(CategorysubcategoryService);
    expect(service).toBeTruthy();
  });
});
