import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { constants } from '../../core/constants';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  categories: any = [];

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService.getCategoryTypes().toPromise()
      .then((res: any) => {
        if (res)
          this.categories = res;
      })
      .catch((err: any) => {});
  }

  getUrl(c: any) {
    return `${constants.routeLinks.blogListPage}/${c.catName}/${c.catId}`;
  }
}
