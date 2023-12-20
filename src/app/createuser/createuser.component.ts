import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit{
  user:User=new User();

  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
    this.user.userFirstName='Riva';
    this.user.userLastName='Arora';
    this.user.userAadhar='234567898769';
    this.user.userAge= 24;
    this.user.userCity='Mumbai';
    this.user.userMobile='3476985687';
    this.user.userEmail='riva@gmail.com';
    this.user.userName='RivaArora';
    this.user.userPassword='Riva@123';
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    })
  }

  goToUserList()
  {
    this.router.navigate(['/get-user'])
  }

    onSubmit()
    {
      this.saveUser();
    }
}
