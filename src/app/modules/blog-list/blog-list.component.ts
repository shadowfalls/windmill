import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
import { constants } from '../../core/constants';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  id: string;
  catName: string;
  blogList: any = [];
  blogPage: string = constants.routeLinks.blogPage;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.catName = params.params.name;
      this.id = params.params.id;
      if (!this.id || !this.catName) {
        this.location.back();
        return;
      }
      this.appService.getBlogListByCategory(this.id).toPromise()
        .then((res :any) => {
          if (res) {
            this.blogList = res;
          }
        })
        .catch((err: any) => this.location.back());
      
    });
  }

  printDate(c: any) {
    return this.appService.printDate(c.date) + ' - ' + c.readTimeMin + ' mins read'
  }
}
