import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/core/constants';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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
