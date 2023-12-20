import { Component, OnInit } from '@angular/core';
import { Bookingassignment } from '../bookingassignment';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-booking-to-room',
  templateUrl: './assign-booking-to-room.component.html',
  styleUrls: ['./assign-booking-to-room.component.css']
})
export class AssignBookingToRoomComponent implements OnInit{

  bookingAssignment:Bookingassignment=new Bookingassignment();
  roomId!:number;
  bookingId!:number;
  isLogIn=false;
  message!:String;

  constructor( private bookingService:BookingService, private router:Router){}

  ngOnInit(): void {
   
}

  onSubmit(){
    this.bookingService.assignmentRoom(this.roomId, this.bookingId).subscribe(data=>
      {
        console.log(data);
        this.isLogIn=true;
        this.message="Booking assign to Room successful";
      },
      error=>console.log(error)
      );
  
  }
}

