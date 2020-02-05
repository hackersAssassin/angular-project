import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerdetaillistComponent } from './passengerdetaillist.component';

describe('PassengerdetaillistComponent', () => {
  let component: PassengerdetaillistComponent;
  let fixture: ComponentFixture<PassengerdetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerdetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
