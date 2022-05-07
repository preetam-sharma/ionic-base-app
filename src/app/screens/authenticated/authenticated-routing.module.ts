import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatedPage } from './authenticated.page';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'authenticated',
    component: AuthenticatedPage,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'favorite',
        component: FavoriteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'more',
        component: MoreComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/authenticated/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/authenticated/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedPageRoutingModule {}
