import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit{

 
  rooms: any[] = []; // Replace 'any[]' with the actual type for Room

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.getRoomList();
  }

  private getRoomList() {
    this.roomService.getAllRoomList().subscribe(
      (data: any[]) => {
        this.rooms = data;
      },
      (error) => {
        console.error('Error fetching room list:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }

  updateRoom(roomId: number) {
    this.router.navigate(['/update-room', roomId]);
  }
  

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId).subscribe(
      (data) => {
        console.log('Room deleted successfully:', data);
        this.reloadComponent();
      },
      (error) => {
        console.error('Error deleting room:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }

  reloadComponent() {
    this.router.navigateByUrl('/room-list', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/room-list']);
    });
  }
  
}
