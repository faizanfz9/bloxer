import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.sass']
})
export class EditBlogComponent implements OnInit {
  blog: any;
  id: any;
  alert = "";
  success = false;
  blogsCat: any;

  constructor(
    private route: ActivatedRoute, 
    private blogService: BlogService,
    private router: Router) 
  { }

  ngOnInit(): void {
    this.blogsCat = this.blogService.blogsCat;
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.blogService.getBlogById(this.id).subscribe(res => {
      this.blog = res.data;
    })
  }

  onUpdateBlog() {
    let confirmation = confirm("Do you want to save?");
    if(confirmation == true) {
      this.blogService.updateBlog(this.id, this.blog).subscribe(res => {
        this.alert = res.msg;
        this.success = res.success;
        this.router.navigate(['/admin/blogs']);
      })
    }
  }
}
