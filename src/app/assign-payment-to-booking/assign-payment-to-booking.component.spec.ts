import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPaymentToBookingComponent } from './assign-payment-to-booking.component';

describe('AssignPaymentToBookingComponent', () => {
  let component: AssignPaymentToBookingComponent;
  let fixture: ComponentFixture<AssignPaymentToBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignPaymentToBookingComponent]
    });
    fixture = TestBed.createComponent(AssignPaymentToBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
