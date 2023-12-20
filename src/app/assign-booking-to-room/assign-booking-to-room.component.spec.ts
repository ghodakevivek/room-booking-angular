import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBookingToRoomComponent } from './assign-booking-to-room.component';

describe('AssignBookingToRoomComponent', () => {
  let component: AssignBookingToRoomComponent;
  let fixture: ComponentFixture<AssignBookingToRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignBookingToRoomComponent]
    });
    fixture = TestBed.createComponent(AssignBookingToRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
