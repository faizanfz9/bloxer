import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() featuredBlogs = [];
  @Input() currentCat: any;

  constructor() { }

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

  ngOnInit(): void {
  }

}
