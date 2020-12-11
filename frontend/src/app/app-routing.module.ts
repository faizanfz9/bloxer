import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { BlogCatComponent } from './admin/blog-cat/blog-cat.component';
import { CatBlogsComponent } from './admin/blog-cat/cat-blogs/cat-blogs.component';
import { BlogListComponent } from './admin/blog-list/blog-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MainComponent } from './admin/dashboard/main/main.component';
import { DraftsComponent } from './admin/drafts/drafts.component';
import { EditBlogComponent } from './admin/edit-blog/edit-blog.component';
import { PublishedComponent } from './admin/published/published.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "blogs"},
  {path: "blogs", component: HomeComponent},
  {path: "blogs/:id", component: BlogDetailComponent},
  {path: "admin", component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard", component: MainComponent
      },
      {
        path: "blogs", component: BlogListComponent
      },
      {
        path: "published", component: PublishedComponent
      },
      {
        path: "drafts", component: DraftsComponent
      },
      {
        path: "categories", component: BlogCatComponent
      },
      {
        path: "categories/:cat", component: CatBlogsComponent
      },
      {
        path: "add-blog", component: AddBlogComponent
      },
      {
        path: "edit-blog/:id", component: EditBlogComponent
      }
    ]
  },
  {path: "user/register", component: RegisterComponent},
  {path: "user/login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
