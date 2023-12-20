import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
  user:User=new User();
  userId!:number;

constructor(private userService: UserService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.userId=this.route.snapshot.params['userId'];
   this.userService.getUserById(this.userId).subscribe(data=>{
   this.user =data;
   },
   error=>console.log(error));
  }

  onSubmit()
  {
this.userService.updateUser(this.userId,this.user).subscribe(data=>{
  console.log(data);
  this.goTouserList();
},
error=>console.log(error));
  }

  goTouserList()
  {
    this.router.navigate(['/get-user']);
  }
}
