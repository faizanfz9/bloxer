import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Blog {
  status: string,
  articles: any
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs_api = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=23b7f8f68253433a8d1d58ceb1b67522";

  constructor(private http: HttpClient) { }

  getAllBlogs() {
    return this.http.get<Blog>(this.blogs_api);
  }

  getBlogsByCat(cat: string) {
    if(cat == "home") {
      this.blogs_api = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=23b7f8f68253433a8d1d58ceb1b67522";
    }else {
      this.blogs_api = "http://newsapi.org/v2/everything?q=" + cat + "&apiKey=23b7f8f68253433a8d1d58ceb1b67522";
    }
    return this.getAllBlogs();
  }
}
