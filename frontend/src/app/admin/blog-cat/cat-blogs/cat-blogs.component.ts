import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-cat-blogs',
  templateUrl: './cat-blogs.component.html',
  styleUrls: ['./cat-blogs.component.sass']
})
export class CatBlogsComponent implements OnInit {
  blogs: any = [];
  cat: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     this.cat = params.cat;
    })
    this.blogService.getBlogsByCat(this.cat).subscribe(res => {
      this.blogs = res.data;
    })
  }

}
