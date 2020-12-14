import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.sass']
})
export class PublishedComponent implements OnInit {
  blogs: any = [];
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().pipe(map(this.blogService.filterActiveBlogs())).subscribe(data => {
      this.blogs = data;
    })
  }
}
