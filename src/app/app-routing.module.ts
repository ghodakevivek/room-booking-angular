import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateroomComponent } from './updateroom/updateroom.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AssignRoomToUserComponent } from './assign-room-to-user/assign-room-to-user.component';
import { AssignBookingToRoomComponent } from './assign-booking-to-room/assign-booking-to-room.component';
import { AssignPaymentToBookingComponent } from './assign-payment-to-booking/assign-payment-to-booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
      {path: 'create-payment', component:CreatepaymentComponent},
      {path: 'get-payment', component:PaymentListComponent},
      {path: 'update-payment/:paymentId', component:UpdatepaymentComponent},
     

      {path: 'create-booking', component:CreatebookingComponent},
      {path: 'get-booking', component:BookingListComponent},
      {path: 'update-booking/:bookingId', component:UpdatebookingComponent},
      

      {path: 'create-room', component:CreateroomComponent},
      {path: 'get-room', component:RoomListComponent},
      {path: 'update-room/:roomId', component:UpdateroomComponent},
      

      {path: 'create-user', component:CreateuserComponent},
      {path: 'get-user', component:UserListComponent},
      {path: 'update-user/:userId', component:UpdateuserComponent},


      {path: 'signup', component:SignupComponent},
      {path: 'login', component:LoginComponent},
      {path: 'admin-login', component:AdminLoginComponent},
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo:'/home', pathMatch:'full'},


      {path: 'admin-home', component:AdminHomeComponent},
      {path: 'user-home', component:UserHomeComponent},
     

      {path: 'assign-room-to-user', component:AssignRoomToUserComponent},
      {path: 'assign-booking-to-room', component:AssignBookingToRoomComponent},
      {path: 'assign-payment-to-booking', component:AssignPaymentToBookingComponent},

      { path: 'createbooking/:id', component: CreatebookingComponent },
      {path: 'view-room', component:ViewRoomComponent},
      {path: 'thanks', component:ThanksComponent}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
