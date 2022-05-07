import { OnboardingService } from './../services/onboarding.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private onboardingService: OnboardingService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated: any = this.authService.getAuthStatus();
      if (!isAuthenticated) {
        const isAlreadyOnboarded: any = this.onboardingService.getOnboardingStatus();
        if(isAlreadyOnboarded){
          this.router.navigate(['/auth/login'],{queryParams:{redirectURL:state.url}});
          return false;
        }else{
          this.router.navigate(['onboarding']);
          return false;
        }
      }
      return true;
  }

}
