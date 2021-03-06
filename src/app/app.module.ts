import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/home/blogs/blogs.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BlogDatePipe } from './pipes/blog-date.pipe';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavComponent } from './admin/dashboard/nav/nav.component';
import { MainComponent } from './admin/dashboard/main/main.component';
import { SidemenuComponent } from './admin/dashboard/sidemenu/sidemenu.component';
import { BlogListComponent } from './admin/blog-list/blog-list.component';
import { BlogCatComponent } from './admin/blog-cat/blog-cat.component';
import { PublishedComponent } from './admin/published/published.component';
import { DraftsComponent } from './admin/drafts/drafts.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { MenuToggleDirective } from './directives/menu-toggle.directive';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { EditBlogComponent } from './admin/edit-blog/edit-blog.component';
import { DismissAlertDirective } from './directives/dismiss-alert.directive';
import { CatBlogsComponent } from './admin/blog-cat/cat-blogs/cat-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    BlogsComponent,
    SidebarComponent,
    FooterComponent,
    BlogDatePipe,
    DashboardComponent,
    NavComponent,
    MainComponent,
    SidemenuComponent,
    BlogListComponent,
    BlogCatComponent,
    PublishedComponent,
    DraftsComponent,
    BlogDetailComponent,
    MenuToggleDirective,
    AddBlogComponent,
    RegisterComponent,
    LoginComponent,
    EditBlogComponent,
    DismissAlertDirective,
    CatBlogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ScrollToModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
