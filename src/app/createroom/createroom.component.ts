import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent implements OnInit{
 

  rooms = ['Normal room', 'AC room', 'Delux room', 'Super delux room', 'Twin room'];
  beds = [1, 2, 3];
  paths=[ '/assets/Normal Room.jpg',
  '/assets/Ac Room.jpg',
  '/assets/Delux Room.jpg',
 '/assets/SuperDelux Room.jpeg',
 '/assets/Twin Room.jpg'];

 roomImages: string[] = []; // New property to hold room images
  room: Room = new Room();

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.setDefaultRoomValues();
  }

  setDefaultRoomValues() {
    this.room.roomType = this.rooms[0];
    this.setDefaultRoomNumber(this.room.roomType);
    this.setDefaultRoomPrice(this.room.roomType);
    this.room.roomBeds = this.beds[0];
    this.room.roomImage= this.paths[0];
    
  
  }

  saveRoom() {


     // Set room image based on the selected room type
     switch (this.room.roomType) {
      case 'Normal room':
        this.room.roomImage = this.paths[0];
        break;
      case 'AC room':
        this.room.roomImage = this.paths[1];
        break;
      case 'Delux room':
        this.room.roomImage = this.paths[2];
        break;
      case 'Super delux room':
        this.room.roomImage = this.paths[3];
        break;
      case 'Twin room':
        this.room.roomImage = this.paths[4];
        break;
      default:
        this.room.roomImage = ''; // Set a default image if needed
    }

    this.roomService.createRoom(this.room).subscribe(data => {
      console.log(data);
      this.goToRoomList();
    });
  }

  goToRoomList() {
    this.router.navigate(['/get-room']);
  }

  onSubmit() {
    this.saveRoom();
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

