import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'back-navigation',
  templateUrl: './back-navigation.component.html',
  styleUrls: ['./back-navigation.component.scss'],
})
export class BackNavigationComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}

  backNavigation(){
    this.location.back();
  }

}
