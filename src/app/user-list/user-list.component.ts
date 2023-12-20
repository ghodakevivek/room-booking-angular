import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  user:User[] | undefined

  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
      this.getUserList();
  }

  private getUserList()
  {
    this.userService.getAllUserList().subscribe(data=>{
      this.user=data;
    });
  }

  updateUser(userId:number)
  {
    this.router.navigate(['update-user', userId])
  }
  deleteUser(userId:number)
  {
    this.userService.deleteUser(userId).subscribe(data=>{
      console.log(data);
      this.reloadComponent();
    },
    error=>console.log(error));
  }

  reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute= () =>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/get-user']);
  }

}
