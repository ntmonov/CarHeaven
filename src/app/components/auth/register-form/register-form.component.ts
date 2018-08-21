import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../../core/models/register.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public model : RegisterModel

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { this.model = new RegisterModel('','','','',123,'') }

  ngOnInit() {
  }

  register(form: NgForm) {
    let user = form.value
    this.authService.register(user).
    subscribe(data => {
      this.toastr.success("Registration successful", 'success', {timeOut: 1000})
      this.authService.authtoken = data['_kmd']['authtoken']
      sessionStorage.setItem('authtoken', data['_kmd']['authtoken'])
      sessionStorage.setItem('username', data['username'])
      this.router.navigate(['/home'])
    }, 
      err => {
        this.toastr.error(err.error.description, 'error', {timeOut:1000});
    })
  }

}
