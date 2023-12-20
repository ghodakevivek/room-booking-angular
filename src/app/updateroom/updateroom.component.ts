import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateroom',
  templateUrl: './updateroom.component.html',
  styleUrls: ['./updateroom.component.css']
})
export class UpdateroomComponent implements OnInit{
  room:Room=new Room();
  roomId!:number;



  rooms = ['Normal room', 'AC room', 'Delux room', 'Super delux room', 'Twin room'];
  beds = [1, 2, 3];
  paths=[ '/assets/Normal Room.jpg',
  '/assets/Ac Room.jpg',
  '/assets/Delux Room.jpg',
 '/assets/SuperDelux Room.jpeg',
 '/assets/Twin Room.jpg'];
 roomImages: string[] = [];

constructor(private roomService: RoomService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.roomId=this.route.snapshot.params['roomId'];
   this.roomService.getRoomById(this.roomId).subscribe(data=>{
   this.room =data;
   console.log(data);
   },
   error=>console.log(error));
  }

  onSubmit()
  {
this.roomService.updateRoom(this.roomId,this.room).subscribe(data=>{
  console.log(data);
  this.goToroomList();
},
error=>console.log(error));
  }

  goToroomList()
  {
    this.router.navigate(['/get-room']);
  }


  setDefaultRoomNumber(roomType: string) {
    // Update room number based on room type
    switch (roomType) {
      case 'Delux room':
        this.room.roomNumber = 'D11';
        break;
      case 'Normal room':
        this.room.roomNumber = 'N22';
        break;
      case 'AC room':
        this.room.roomNumber = 'A33';
        break;
      case 'Twin room':
        this.room.roomNumber = 'T44';
        break;
      case 'Super delux room':
        this.room.roomNumber = 'SD5';
        break;
      default:
        this.room.roomNumber = 'G12';
    }
  }

  setDefaultRoomPrice(roomType: string) {
    // Update room price based on room type
    switch (roomType) {
      case 'Delux room':
        this.room.roomPrice = 2000;
        break;
      case 'Normal room':
        this.room.roomPrice = 1000;
        break;
      case 'AC room':
        this.room.roomPrice = 1500;
      break;
      case 'Super delux room':
        this.room.roomPrice = 3000;
      break;
      case 'Twin room':
        this.room.roomPrice = 2500;
      break;
      
      default:
        this.room.roomPrice = 0; 
    }
  }

  onRoomTypeChange(event: any) {
    this.room.roomType = event.target.value;
    this.setDefaultRoomNumber(this.room.roomType);
    this.setDefaultRoomPrice(this.room.roomType);
    this.roomImages = this.getRoomImages(this.room.roomType); 
    
  }


  getRoomImages(roomType: string): string[] {
    // Get room images based on room type
    switch (roomType) {
      case 'Delux room':
        return [this.paths[2]];
      case 'Normal room':
        return [this.paths[0]];
      case 'AC room':
        return [this.paths[1]];
      case 'Super delux room':
        return [this.paths[3]];
      case 'Twin room':
        return [this.paths[4]];
      default:
        return [];
    }
  }
}
