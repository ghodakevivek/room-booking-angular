import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebooking',
  templateUrl: './updatebooking.component.html',
  styleUrls: ['./updatebooking.component.css']
})
export class UpdatebookingComponent implements OnInit{
  booking:Booking=new Booking();
  bookingId!:number;

constructor(private bookingService: BookingService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.bookingId=this.route.snapshot.params['bookingId'];
   this.bookingService.getBookingById(this.bookingId).subscribe(data=>{
   this.booking =data;
   },
   error=>console.log(error));
  }

  onSubmit()
  {
this.bookingService.updateBooking(this.bookingId,this.booking).subscribe(data=>{
  console.log(data);
  this.goTobookingList();
},
error=>console.log(error));
  }

  goTobookingList()
  {
    this.router.navigate(['/get-booking']);
  }

}
