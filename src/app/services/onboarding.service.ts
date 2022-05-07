import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor( private userService: UserService ) { }

  getOnboardingStatus(){
    if(this.userService.onboardingStatus){
      return true;
    }else{
      return false;
    }
  }

}
