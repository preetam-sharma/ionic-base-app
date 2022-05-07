import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticatedPageRoutingModule } from './authenticated-routing.module';

import { AuthenticatedPage } from './authenticated.page';
import { BackNavigationComponent } from './shared/back-navigation/back-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticatedPageRoutingModule,
  ],
  declarations: [AuthenticatedPage,BackNavigationComponent]
})
export class AuthenticatedPageModule {}
