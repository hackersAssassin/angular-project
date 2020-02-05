import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysubcategoryComponent } from './categorysubcategory.component';

describe('CategorysubcategoryComponent', () => {
  let component: CategorysubcategoryComponent;
  let fixture: ComponentFixture<CategorysubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorysubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
