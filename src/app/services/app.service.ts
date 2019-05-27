import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from '../core/constants';

@Injectable()
export class AppService {

    constructor(
        private http: HttpClient
    ) { }

    getCategoryTypes() {
        return this.http.get(`${constants.baseUrl}/api/categories/_categorieTypes.json`);
    }

    getBlogListByCategory(id: string) {
        return this.http.get(`${constants.baseUrl}/api/categories/${id}.json`);
    }

    fetchBlogArticle(id: string) {
        return this.http.get(`${constants.baseUrl}/api/articles/${id}.json`);
    }

    getDate(date) {
        if (!date)
            return new Date();
        return new Date(date);
    }

    printDate(date) {
        if (!date)
            return '';
        date = this.getDate(date);
        const month = constants.months[date.getMonth()];
        return month + ' ' + date.getDate()+', '+date.getFullYear();
    }
}
