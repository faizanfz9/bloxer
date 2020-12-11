import { Component, EventEmitter, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  blogsCat: any;
  isLoggedIn = false;

  @Output() onClickCat = new EventEmitter();
  @Input() currentCat: any;

  constructor(private router: Router, private blogService: BlogService, private authService: AuthService) { }

  ngOnInit(): void {
    this.blogsCat = this.blogService.blogsCat;
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  catChanged(category: string) {
      this.router.navigate(['/'], { queryParams: {cat: category.toLowerCase()} })
      this.onClickCat.emit(category);
  }

  onLogOut() {
    let confirmation = confirm("Do you want to logout?");
    if(confirmation == true) {
      this.authService.logOut();
      this.router.navigate(["/user/login"]);
    }
  }

}
