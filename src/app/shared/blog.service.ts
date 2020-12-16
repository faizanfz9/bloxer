import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataResponse } from "../models/dataResponse";
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogsCat = ["travel", "fashion", "tech", "photography"];

  constructor(private http: HttpClient) { }

  filterActiveBlogs() {
    return (res: DataResponse) => {
      const blogs = res.data;
      return blogs.filter((blog: Blog) => blog.visible == true);
    }
  }

  filterInActiveBlogs() {
    return (res: DataResponse) => {
      const blogs = res.data;
      return blogs.filter((blog: Blog) => blog.visible == false);
    }
  }
  
  
  // fetch all Blogs
  getAllBlogs() {
    return this.http.get<DataResponse>('api/blogs/');
  }

  // get blogs by cat
  getBlogsByCat(cat: string) {
    return this.http.get<DataResponse>('api/blogs/?cat='+cat);
  }

  // fetch blog by id
  getBlogById(id: string) {
    return this.http.get<DataResponse>("api/blogs/"+ id);
  }

  // add new blog
  addBlog(newBlog: any) {
    return this.http.post<DataResponse>("api/blogs/add", newBlog);
  }

  // update blog
  updateBlog(id: string, blog: any) {
    return this.http.patch<DataResponse>("api/update/"+ id, blog);
  }

  // delete blog
  deleteBlog(id: string) {
    return this.http.delete<DataResponse>("api/blogs/delete/"+ id);
  }
}
