import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from "../../models/blog";
import { filter, map } from "rxjs/operators";
import { from, of, pipe } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogs = [];
  blogsCat = "All";

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().pipe(map(this.blogService.filterActiveBlogs())).subscribe(data => {
      this.blogs = data;
    })
  }

  changeCat(cat: string) {
    this.blogs = [];
    this.blogsCat = cat;
    this.blogService.getBlogsByCat(cat).pipe(map(this.blogService.filterActiveBlogs())).subscribe(data => {
      this.blogs = data;
    })
  }

}
