import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  alert = "";
  blogsCat: any;
  success = false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogsCat = this.blogService.blogsCat;
  }

  onAddBlog(form: NgForm) {
    const blog: Blog = {
      title: form.value.title,
      body: form.value.body,
      imageUrl: form.value.imageUrl,
      category: form.value.category,
      publishedAt: form.value.date,
      author: form.value.author,
      visible: true
    }
    this.blogService.addBlog(blog).subscribe((res) => {
      this.alert = res.msg;
      this.success = res.success;
      form.reset();
    })
  }
}
