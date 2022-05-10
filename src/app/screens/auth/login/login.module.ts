import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { EnterMobileNoComponent } from './enter-mobile-no/enter-mobile-no.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [EnterMobileNoComponent, VerifyOtpComponent]
})
export class LoginPageModule {}
