import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
  @Input() featuredBlogs: any;
  @Input() currentCat: any;

  constructor() { }

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

  ngOnInit(): void {
  }

}
