import { Component, OnInit } from '@angular/core';
import { Paymentassignment } from '../paymentassignment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-payment-to-booking',
  templateUrl: './assign-payment-to-booking.component.html',
  styleUrls: ['./assign-payment-to-booking.component.css']
})
export class AssignPaymentToBookingComponent implements OnInit{

  paymentAssignment:Paymentassignment=new Paymentassignment();
  bookingId!:number;
  paymentId!:number;
  isLogIn=false;
  message!:String;

  constructor( private paymentService:PaymentService, private router:Router){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.paymentService.assignmentBooking(this.bookingId, this.paymentId).subscribe(data=>
      {
        console.log(data);
        this.isLogIn=true;
        this.message="Payment assign to Booking successful";
        this.router.navigate(['/thanks']);
      },
      error=>console.log(error)
      );
  
  }
}
