/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
})
export class VerifyOtpComponent implements OnInit {

  public loading: boolean = false;
  public redirectURL: string = '';

  constructor( private location: Location, private router: Router,private route: ActivatedRoute, public userService: UserService, private platform: Platform ) {
    let params = this.route.snapshot.queryParams;
    if (params.redirectURL) {
        this.redirectURL = params.redirectURL;
    }

    this.platform.keyboardDidShow.subscribe(ev => {
      const { keyboardHeight } = ev;
      console.log('active');
      alert('keyboard active');
      // Do something with the keyboard height such as translating an input above the keyboard.
    });

    this.platform.keyboardDidHide.subscribe(() => {
      console.log('not active');
      alert('keyboard closed');
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
    this.userService.id = '2';
    this.userService.save();
    this.backToPreviousPage();
  }

  backToPreviousPage() {
    if (this.redirectURL) {
      this.router.navigateByUrl(this.redirectURL,)
          .catch(() => this.router.navigate(['/authenticated/home']));
    } else {
        this.router.navigate(['/authenticated/home']);
    }
  }

}
