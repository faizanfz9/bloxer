import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
  }

  onLogOut() {
    let confirmation = confirm("Do you want to logout?");
    if(confirmation == true) {
      this.authService.logOut();
      this.route.navigate(["/user/login"]);
    }
  }
}
