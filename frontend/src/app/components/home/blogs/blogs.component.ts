import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  @Input() allBlogs: any;
  @Input() cat: any;

  constructor() { }

  ngOnInit(): void {
  }

}
