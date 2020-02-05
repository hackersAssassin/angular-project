import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetaillistComponent } from './customerdetaillist.component';

describe('CustomerdetaillistComponent', () => {
  let component: CustomerdetaillistComponent;
  let fixture: ComponentFixture<CustomerdetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
