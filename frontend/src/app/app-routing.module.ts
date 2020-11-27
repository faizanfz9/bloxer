import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { BlogListComponent } from './admin/blog-list/blog-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MainComponent } from './admin/dashboard/main/main.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "blogs"},
  {path: "blogs", component: HomeComponent},
  {path: "admin", component: DashboardComponent,
    children: [
      {
        path: "dashboard", component: MainComponent
      },
      {
        path: "blogs", component: BlogListComponent
      },
      {
        path: "add-blog", component: AddBlogComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
