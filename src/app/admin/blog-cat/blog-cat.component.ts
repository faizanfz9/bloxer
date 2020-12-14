import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-blog-cat',
  templateUrl: './blog-cat.component.html',
  styleUrls: ['./blog-cat.component.scss']
})
export class BlogCatComponent implements OnInit {
  blogsCatList: any = []; 

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    let catList: any = [];
    let blogCatImgs = ['fa-plane', 'fa-line-chart', 'fa-mobile', 'fa-camera']; 
    this.blogService.getAllBlogs().subscribe(res => {
      this.blogService.blogsCat.forEach(function(item, index){
        catList.push({
          name: item,
          icon: blogCatImgs[index],
          total: res.data.filter((blog: Blog) => {
            return blog.category == item
          }).length
        })
      })
      this.blogsCatList = catList;
    })
  }

  
}
