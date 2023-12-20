import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepaymentComponent } from './createpayment.component';

describe('CreatepaymentComponent', () => {
  let component: CreatepaymentComponent;
  let fixture: ComponentFixture<CreatepaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepaymentComponent]
    });
    fixture = TestBed.createComponent(CreatepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
