/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-enter-mobile-no',
  templateUrl: './enter-mobile-no.component.html',
  styleUrls: ['./enter-mobile-no.component.scss'],
})
export class EnterMobileNoComponent implements OnInit {

  public loading: boolean = false;

  constructor( private location: Location, private router: Router,private route: ActivatedRoute, public userService: UserService, private platform: Platform ) {

    this.platform.keyboardDidShow.subscribe(ev => {
      const { keyboardHeight } = ev;
      // console.log('active');
      // alert('keyboard active');
      // Do something with the keyboard height such as translating an input above the keyboard.
    });

    this.platform.keyboardDidHide.subscribe(() => {
      // console.log('not active');
      // alert('keyboard closed');
      // Move input back to original location
    });

   }

  ngOnInit() {
    if(this.userService.id){
      this.router.navigate(['authenticated/home']);
    }
  }

  backNavigation(){
    this.location.back();
  }

  login(){
    this.router.navigate(['auth/login/verifyOtp']);
  }

}
