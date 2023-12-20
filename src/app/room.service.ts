import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';
import { HttpClient } from '@angular/common/http';
import { Roomassignment } from './roomassignment';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
private addRoom="http://localhost:8080/api/createRoom";
private getRooms="http://localhost:8080/api/getAllRooms";
private getById="http://localhost:8080/api/getRoomById";
private assign="http://localhost:8080/api/room/assignUser";
private editRoom="http://localhost:8080/api/updateRoom";
private delRoom="http://localhost:8080/api/deleteRoom";
  constructor(private httpClient:HttpClient){ }

  createRoom(room:Room):Observable<Object>
  {
    return this.httpClient.post(`${this.addRoom}`, room);
  }

  getAllRoomList():Observable<Room[]>
  {
    return this.httpClient.get<Room[]>(`${this.getRooms}`);
  }

  getRoomById(roomId:number):Observable<Room>
  {
    return this.httpClient.get<Room>(`${this.getById}/${roomId}`);
  }

  assignmentUser(userId:number,roomId:number):Observable<Params>
  {
     return this.httpClient.post(`${this.assign}/${userId}/${roomId}`,Roomassignment);
  }

  updateRoom(roomId:number, room:Room):Observable<Object>
  {
    return this.httpClient.put(`${this.editRoom}/${roomId}`, room);
  }

  deleteRoom(roomId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delRoom}/${roomId}`);
  }

}
