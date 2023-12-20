import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit{

  payment:Payment[] | undefined

  constructor(private paymentService:PaymentService, private router:Router){}
  ngOnInit(): void {
      this.getPaymentList();
  }

  private getPaymentList()
  {
    this.paymentService.getAllPaymentList().subscribe(data=>{
      this.payment=data;
    });
  }

  updatePayment(paymentId:number)
  {
    this.router.navigate(['update-payment', paymentId])
  }
  deletePayment(paymentId:number)
  {
    this.paymentService.deletePayment(paymentId).subscribe(data=>{
      console.log(data);
      this.reloadComponent();
    },
    error=>console.log(error));
  }

  reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/get-payment']);
  }

}
