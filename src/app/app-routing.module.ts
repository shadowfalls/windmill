import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { BlogListComponent } from './modules/blog-list/blog-list.component';
import { BlogComponent } from './modules/blog/blog.component';
import { AboutComponent } from './modules/about/about.component'; 

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'topics', component: CategoriesComponent},
  {path: 'blogs/:name/:id', component: BlogListComponent},
  {path: 'blog/:id', component: BlogComponent},
  {path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
