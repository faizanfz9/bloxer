import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegistered = false;
  isLoading = false;
  errorMsg = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm) {
    let newUser = {
      name: form.value.name,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    } 
    this.isLoading = true;
    this.authService.register(newUser).subscribe(res => {
      if(res.success == true) {
        this.isRegistered = true;
        this.isLoading = false;
      }else {
        console.log(res);
        this.errorMsg = res.msg;
        this.isLoading = false;
      }
    })
  }
}
