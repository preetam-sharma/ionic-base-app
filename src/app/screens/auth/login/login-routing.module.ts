import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { EnterMobileNoComponent } from './enter-mobile-no/enter-mobile-no.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'enterMobileNo',
    component: EnterMobileNoComponent
  },
  {
    path: 'verifyOtp',
    component: VerifyOtpComponent
  },
  {
    path: '',
    redirectTo: 'enterMobileNo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
