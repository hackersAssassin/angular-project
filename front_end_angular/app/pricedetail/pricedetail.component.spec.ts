import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricedetailComponent } from './pricedetail.component';

describe('PricedetailComponent', () => {
  let component: PricedetailComponent;
  let fixture: ComponentFixture<PricedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
