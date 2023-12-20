import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { Paymentassignment } from './paymentassignment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private addPayment="http://localhost:8080/api/createPayment";
private getPayments="http://localhost:8080/api/getAllPayments";
private getPayById="http://localhost:8080/api/getPaymentById";
private assign="http://localhost:8080/api/payment/assignBooking";
private editPayment="http://localhost:8080/api/updatePayment";
private delPayment="http://localhost:8080/api/deletePayment";
  constructor(private httpClient:HttpClient){ }

  createPayment(payment:Payment):Observable<Object>
  {
    return this.httpClient.post(`${this.addPayment}`, payment);
  }

  getAllPaymentList():Observable<Payment[]>
  {
    return this.httpClient.get<Payment[]>(`${this.getPayments}`);
  }

  getPaymentById(paymentId:number):Observable<Payment>
  {
    return this.httpClient.get<Payment>(`${this.getPayById}/${paymentId}`);
  }

  assignmentBooking(bookingId:number,paymentId:number):Observable<Params>
  {
     return this.httpClient.post(`${this.assign}/${bookingId}/${paymentId}`,Paymentassignment);
  }

  updatePayment(paymentId:number, payment:Payment):Observable<Object>
  {
    return this.httpClient.put(`${this.editPayment}/${paymentId}`, payment);
  }

  deletePayment(paymentId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delPayment}/${paymentId}`);
  }
}
