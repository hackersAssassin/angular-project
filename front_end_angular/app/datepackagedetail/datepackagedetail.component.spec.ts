import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepackagedetailComponent } from './datepackagedetail.component';

describe('DatepackagedetailComponent', () => {
  let component: DatepackagedetailComponent;
  let fixture: ComponentFixture<DatepackagedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepackagedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepackagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
