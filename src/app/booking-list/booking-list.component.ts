import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  booking:Booking[] | undefined

  constructor(private bookingService:BookingService, 
  private router:Router){}
  ngOnInit(): void {
      this.getBookingList();
  }

  private getBookingList()
  {
    this.bookingService.getAllBookingList().subscribe(data=>{
      this.booking=data;
    });
  }

  updateBooking(bookingId:number)
  {
    this.router.navigate(['update-booking', bookingId])
  }
  deleteBooking(bookingId:number)
  {
    this.bookingService.deleteBooking(bookingId).subscribe(data=>{
      console.log(data);
      this.reloadComponent();
    },
    error=>console.log(error));
  }

  reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/get-booking']);
  }


}
