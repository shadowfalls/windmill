import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { AppService } from './services/app.service';
import { CategoriesComponent } from './modules/categories/categories.component';
import { BlogListComponent } from './modules/blog-list/blog-list.component';
import { BlogComponent } from './modules/blog/blog.component';
import { AboutComponent } from './modules/about/about.component';
import { MyGist } from './modules/shared/gist.component';
import { DisqusModule } from "ngx-disqus";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CategoriesComponent,
    BlogListComponent,
    BlogComponent,
    AboutComponent,
    MyGist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGistModule,
    DisqusModule.forRoot('disqus_shortname')
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
