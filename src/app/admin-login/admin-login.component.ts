import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  // admin: any={};
  // errorMassage: string="";

  // constructor(private adminservice:AdminService, private router:Router){}

  // login(): void{
  //   this.adminservice.login(this.admin).subscribe(
  //     (token:string)=>{

  //       localStorage.setItem('userToken', token);


  //       this.router.navigate(['/admin-home']);

  //     },
  //     (error)=>{
  //       console.error('Login failed', error);


  //       if(error instanceof HttpErrorResponse && error.status === 200){

  //         console.log('Login successful');

  //       }
  //       else{
  //         this.errorMassage='Invalid Username or Password';

  //       }
  //     }
  //     );
    
  // }



  adminEmail: string ="";
  adminPassword: string ="";


  constructor(private router: Router,private httpClient: HttpClient) {}
 


  Login() {
    console.log(this.adminEmail);
    console.log(this.adminPassword);
 
    let bodyData = {
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
    };
 
        this.httpClient.post("http://localhost:8080/api/login/admin", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/admin-home');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }

      });
    }


}
