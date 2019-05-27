import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppService } from 'src/app/services/app.service';
import { Edit } from 'src/app/models/edit.model';
import { constants } from 'src/app/core/constants';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  id: string;
  content: Edit[] = [];
  title: string;
  description: string;
  date: Date;
  readTimeMin: string;
  categoryId: string;
  username: string = 'shadowfalls';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.params.id;
      if (!this.id) {
        this.location.back();
        return;
      }
      this.appService.fetchBlogArticle(this.id).toPromise()
        .then((res: any) => {
          if (res) {
            this.content = res.content && res.content.length ? res.content : [];
            this.title = res.title;
            this.description = res.description;
            this.date = this.appService.getDate(res.date);
            this.readTimeMin = res.readTimeMin;
            this.categoryId = res.categoryId;
          }
        })
        .catch((err: any) => this.location.back());
    });
  }

  printDate(date) {
    if (!date)
      return '';
    const month = constants.months[date.getMonth()];
    return month + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

}
