import { Component } from '@angular/core';
import { Roomassignment } from '../roomassignment';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-room-to-user',
  templateUrl: './assign-room-to-user.component.html',
  styleUrls: ['./assign-room-to-user.component.css']
})
export class AssignRoomToUserComponent {

  roomAssignment:Roomassignment=new Roomassignment();
  userId!:number;
  roomId!:number;
  isLogIn=false;
  message!:String;

  constructor( private roomService:RoomService, private router:Router){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.roomService.assignmentUser(this.userId, this.roomId).subscribe(data=>
      {
        console.log(data);
        this.isLogIn=true;
        this.message="Room assign to User successful";
      },
      error=>console.log(error)
      );
  
  }
}






