import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagecompletedetailComponent } from './packagecompletedetail.component';

describe('PackagecompletedetailComponent', () => {
  let component: PackagecompletedetailComponent;
  let fixture: ComponentFixture<PackagecompletedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagecompletedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagecompletedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
