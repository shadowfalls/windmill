import { Component, OnInit } from '@angular/core';
import { constants } from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  landingPage: string  = constants.routeLinks.landingPage;
  categoriesPage: string  = constants.routeLinks.categoriesPage;
  aboutPage: string  = constants.routeLinks.aboutPage;

  isMobileMenuShow: boolean = false;
  
  ngOnInit() {
  }
}
