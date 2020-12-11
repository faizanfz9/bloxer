import { AfterContentInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogDetailComponent implements OnInit, AfterContentInit {
  blog: any;
  id: any;
  isFetched = false;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.blogService.getBlogById(this.id).subscribe(res => {
      this.blog = res.data;
      this.isFetched = true;
    })
  }

  ngAfterContentInit() {
    
  }

}
