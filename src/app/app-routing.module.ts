import { OnboardingComponent } from './screens/extra/onboarding/onboarding.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './screens/extra/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/authenticated/authenticated.module').then( m => m.AuthenticatedPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./screens/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'onboarding',
    component: OnboardingComponent
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**',pathMatch: 'full', redirectTo: '404', },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
