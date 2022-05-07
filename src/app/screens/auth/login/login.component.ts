/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loading: boolean = false;
  public redirectURL: string = '';

  constructor( private router: Router,private route: ActivatedRoute, public userService: UserService ) {
    let params = this.route.snapshot.queryParams;
    if (params.redirectURL) {
        this.redirectURL = params.redirectURL;
    }
   }

  ngOnInit() {
    if(this.userService.id){
      this.router.navigate(['authenticated/home']);
    }
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
