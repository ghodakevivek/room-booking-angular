import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookingComponent } from './createbooking.component';

describe('CreatebookingComponent', () => {
  let component: CreatebookingComponent;
  let fixture: ComponentFixture<CreatebookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatebookingComponent]
    });
    fixture = TestBed.createComponent(CreatebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
