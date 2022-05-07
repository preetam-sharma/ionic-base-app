import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public userService: UserService) { }

  getAuthStatus(){
    if(this.userService.id){
      return true;
    }
    return false;
  }
}
