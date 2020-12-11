import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.sass']
})
export class DraftsComponent implements OnInit {
  blogs: any = [];
  alert = "";

  constructor(private blogService: BlogService, private route: Router) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().pipe(map(this.blogService.filterInActiveBlogs())).subscribe(data => {
      this.blogs = data;
    })
  }

  changeVisibility(blog: any, id: string) {
    let confirmation = confirm("Do you want to publish this post?");
    if(confirmation == true) {
      blog.visible = true;
      this.blogService.updateBlog(id, blog).subscribe(res => {
        this.alert = res.msg;
        window.location.reload();
      })
    }
  }
}
