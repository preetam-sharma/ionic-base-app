import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.page.html',
  styleUrls: ['./authenticated.page.scss'],
})
export class AuthenticatedPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    console.log('clicked');
    this.menu.toggle();
  }

  tabChange(tab: string){
    console.log($('#'+tab+'_icon').attr('src'));
  }

}
