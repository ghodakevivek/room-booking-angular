import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRoomToUserComponent } from './assign-room-to-user.component';

describe('AssignRoomToUserComponent', () => {
  let component: AssignRoomToUserComponent;
  let fixture: ComponentFixture<AssignRoomToUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignRoomToUserComponent]
    });
    fixture = TestBed.createComponent(AssignRoomToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
