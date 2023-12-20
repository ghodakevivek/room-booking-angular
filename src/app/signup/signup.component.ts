import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // user: any={};

  // constructor(private userService:UserService, private router:Router){}

  // signup(): void{
  //   this.userService.signup(this.user).subscribe({
  //     next:(response)=>{
  //       console.log('Signup successful', response);
  //       alert('Signup done');
  //       this.router.navigate(['/home']);
  //     },
  //     error:(error)=> {
  //       console.error('Signup failed', error);
  //       alert('Failed to signup');
  //     },
  //   });
  // }



  userFirstName: string ="";
  userLastName: string ="";
  userAadhar: string ="";
  userAge: number = 0;
  userCity: string ="";
  userMobile: string ="";
  userEmail: string ="";
  userName: string ="";
  userPassword: string ="";
 
  constructor(private httpClient: HttpClient , private router:Router)
  {
  }
  save()
  {
  
    let bodyData = {
      "userFirstName" : this.userFirstName,
      "userLastName" : this.userLastName,
      "userAadhar" : this.userAadhar,
      "userAge" : this.userAge,
      "userCity" : this.userCity,
      "userMobile" : this.userMobile,
      "userEmail" : this.userEmail,
      "userName" : this.userName,
      "userPassword" : this.userPassword
    };
    this.httpClient.post("http://localhost:8080/api/save/user",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully");
        this.router.navigate(['/home']);
    });
  }

}
