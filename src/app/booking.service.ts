import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Booking } from './booking';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { Bookingassignment } from './bookingassignment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private addBooking="http://localhost:8080/api/createBooking";
  private getBookings="http://localhost:8080/api/getAllBookings";
  private getBookById="http://localhost:8080/api/getBookingById";
  private assign="http://localhost:8080/api/booking/assignRoom";
  private editBooking="http://localhost:8080/api/updateBooking";
  private delBooking="http://localhost:8080/api/deleteBooking";

    constructor(private httpClient:HttpClient){ }
  
    createBooking(booking:Booking):Observable<Object>
    {
      return this.httpClient.post(`${this.addBooking}`, booking);
    }
  
    getAllBookingList():Observable<Booking[]>
    {
      return this.httpClient.get<Booking[]>(`${this.getBookings}`);
    }
  
    getBookingById(bookingId:number):Observable<Booking>
    {
      return this.httpClient.get<Booking>(`${this.getBookById}/${bookingId}`);
    }

    assignmentRoom(roomId:number,bookingId:number):Observable<Params>
  {
     return this.httpClient.post(`${this.assign}/${roomId}/${bookingId}`,Bookingassignment);
  }
  
    updateBooking(bookingId:number, booking:Booking):Observable<Object>
    {
      return this.httpClient.put(`${this.editBooking}/${bookingId}`, booking);
    }
  
    deleteBooking(bookingId:number):Observable<Object>
    {
      return this.httpClient.delete(`${this.delBooking}/${bookingId}`);
    }

}
