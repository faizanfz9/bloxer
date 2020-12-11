import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';
import { ScrollToService, ScrollToConfigOptions  } from '@nicky-lenaers/ngx-scroll-to'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: any = [];
  alert = "";

  @ViewChild("dropdown") dropdown!: ElementRef;

  constructor(private blogService: BlogService, private scrollToService: ScrollToService) { 
  }

  ngOnInit(): void {
   this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogService.getAllBlogs().subscribe(res => {
      this.blogs = res.data;
    })
  }

  onDelete(id: string) {
    let confirmation = confirm("Do you want to delete this blog?");
    if(confirmation == true) {
      this.blogService.deleteBlog(id).subscribe(res => {
        this.fetchBlogs();
        this.alert = res.msg;
        const config: ScrollToConfigOptions = {
          target: "top"
        }
        this.scrollToService.scrollTo(config);
      })
    }
  }

  changeVisibility(event: Event, blog: any, id: string) {
    event.preventDefault();
    var confirmation;
    if(!blog.visible) {
      confirmation = confirm("Do you want to publish this post?");
    }else {
      confirmation = confirm("Do you want to unpublish this post?");
    }
    if(confirmation == true) {
      blog.visible = !blog.visible;
      this.blogService.updateBlog(id, blog).subscribe(res => {
        this.alert = res.msg;
      })
      this.dropdown.nativeElement.classList.remove("show");
    }
  }
}
