import { Component, OnInit } from '@angular/core';
import * as BlogData from '../../blogs.json';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: any;

  constructor() { }

  ngOnInit(): void {
    this.blogs =  BlogData.blogs;
  }

}
