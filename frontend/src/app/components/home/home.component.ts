import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';

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
    this.blogService.getAllBlogs().subscribe((res) => {
      this.blogs = res.articles;
      console.log(this.blogs)
    })
  }

  changeCat(cat: string) {
    this.blogs = [];
    this.blogsCat = cat;
    this.blogService.getBlogsByCat(cat.toLowerCase()).subscribe((res) => {
      this.blogs = res.articles;
    })
  }

}
