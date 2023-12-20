import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepayment',
  templateUrl: './updatepayment.component.html',
  styleUrls: ['./updatepayment.component.css']
})
export class UpdatepaymentComponent implements OnInit{

  payment:Payment=new Payment();
  paymentId!:number;

constructor(private paymentService: PaymentService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.paymentId=this.route.snapshot.params['paymentId'];
   this.paymentService.getPaymentById(this.paymentId).subscribe(data=>{
   this.payment =data;
   },
   error=>console.log(error));
  }

  onSubmit()
  {
this.paymentService.updatePayment(this.paymentId,this.payment).subscribe(data=>{
  console.log(data);
  this.goTopaymentList();
},
error=>console.log(error));
  }

  goTopaymentList()
  {
    this.router.navigate(['/get-payment']);
  }

}
