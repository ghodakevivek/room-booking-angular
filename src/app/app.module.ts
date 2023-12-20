import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateroomComponent } from './updateroom/updateroom.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
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







@NgModule({
  declarations: [
    AppComponent,
    CreatepaymentComponent,
    PaymentListComponent,
    UpdatepaymentComponent,
    CreatebookingComponent,
    BookingListComponent,
    UpdatebookingComponent,
    CreateroomComponent,
    RoomListComponent,
    UpdateroomComponent,
    CreateuserComponent,
    UserListComponent,
    UpdateuserComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AssignRoomToUserComponent,
    AssignBookingToRoomComponent,
    AssignPaymentToBookingComponent,
    SignupComponent,
    LoginComponent,
    AdminLoginComponent,
    HomeComponent,
    ViewRoomComponent,
    ThanksComponent,
  
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
