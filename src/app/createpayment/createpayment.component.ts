import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.css']
})
export class CreatepaymentComponent implements OnInit{

  payment:Payment=new Payment();

  constructor(private paymentService:PaymentService, private router:Router){}
  ngOnInit(): void {
    this.payment.paymentAmount=0;
    this.payment.paymentDate=new Date('2023-08-24');
      
  }
  savePayment(){
    this.paymentService.createPayment(this.payment).subscribe(data=>{
      console.log(data);
      this.goToPaymentList();
    })
  }

  goToPaymentList()
  {
    this.router.navigate(['/assign-payment-to-booking']);
  }

    onSubmit()
    {
      this.savePayment();
    }

}
