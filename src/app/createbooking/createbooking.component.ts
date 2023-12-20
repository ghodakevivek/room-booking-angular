import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import {  Router } from '@angular/router';

@Component({

  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit{
  persons = [1,2,3,4,5,6,7,8,9,10];
  booking:Booking=new Booking();
 

  constructor(private bookingService: BookingService,
    private router:Router){}
  ngOnInit(): void {

    this.booking.checkInDate=new Date('2023-09-23');
    this.booking.checkOutDate=new Date('2023-09-25');
    this.booking.bookingDays=0;
    this.booking.bookingPersons=this.persons[0];
   

  }
saveBooking(){
this.bookingService.createBooking(this.booking).subscribe(data=>{
  console.log(data);
  this.goToBookingList();
})
}

goToBookingList()
{
this.router.navigate(['/assign-booking-to-room']);
}

  onSubmit()
  {
    this.saveBooking();
  }

}






 



