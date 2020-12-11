import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  totalBlogs: any;
  totalCat: any;
  totalPublished: any;
  totalDrafts: any;

  constructor(private blogService: BlogService) { 
    this.blogService.getAllBlogs().subscribe(res => {
      this.totalBlogs = res.data.length;
    })
    this.blogService.getAllBlogs().pipe(map(this.blogService.filterActiveBlogs())).subscribe(data => {
      this.totalPublished = data.length;
    })
    this.blogService.getAllBlogs().pipe(map(this.blogService.filterInActiveBlogs())).subscribe(data => {
      this.totalDrafts = data.length;
    })
    this.totalCat = this.blogService.blogsCat.length;
  }

  ngOnInit(): void {
  }

}
