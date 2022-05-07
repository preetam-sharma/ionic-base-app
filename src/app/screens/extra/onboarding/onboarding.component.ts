/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild('onboardingSlides') onboardingSlides: any;

  public disablePrevBtn: boolean = true;
  public disableNextBtn: boolean = false;

  constructor( private userService: UserService, private router: Router ) { }

  async ngOnInit() {
    if(this.userService.onboardingStatus){
      this.router.navigate(['authenticated/home']);
    }
  }

  doCheck() {
    let prom1 = this.onboardingSlides.isBeginning();
    let prom2 = this.onboardingSlides.isEnd();

    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }

  prev() {
    this.slides.slidePrev();
  }

  next() {
    this.slides.slideNext();
  }

  async onboardingCompleted(){
    this.userService.onboardingStatus = true;
    this.userService.save();
    this.router.navigate(['authenticated/home']);
  }

}
