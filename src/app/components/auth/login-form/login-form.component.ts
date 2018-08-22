import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../core/models/login.model'
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public model: LoginModel

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.model = new LoginModel('','')
   }

  ngOnInit() {
  }

  login(form: NgForm) {
    let user = form.value
    this.authService.login(user)
      .subscribe(data => {
        this.toastr.success("Login successful", 'success', {timeOut: 1000})
        this.authService.authtoken = data['_kmd']['authtoken']
        sessionStorage.setItem('authtoken', data['_kmd']['authtoken'])
        sessionStorage.setItem('username', data['username'])
        sessionStorage.setItem('userId', data['_id'])
        this.router.navigate(['/home'])
      }, err => {
        this.toastr.error(err.error.description, 'error', {timeOut: 1000});
      })
  }


}
