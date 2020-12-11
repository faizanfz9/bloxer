import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isErrorFound = false;
  isLoading = false;
  errorMsg = "";

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  onLogIn(form: NgForm) {
    const user = {
      email: form.value.email,
      password: form.value.password
    }
    this.isLoading = true;
    this.authService.logIn(user).subscribe(res => {
      if(res.hasOwnProperty("user")) {
        this.authService.storeUserData(res.token, res.user);
        this.isLoading = false;
        this.route.navigate(['admin/dashboard']);
      }else {
        this.isLoading = false;
        this.isErrorFound = true;
        this.errorMsg = res.msg;
      }
    }, error => {
      this.errorMsg = "Something Went Wrong!";
      this.isErrorFound = true;
      this.isLoading = false;
    });
  }

}
