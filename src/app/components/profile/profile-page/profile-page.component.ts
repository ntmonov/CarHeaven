import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditModel } from '../../../core/models/edit.model';
import { LoginModel } from '../../../core/models/login.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public model: EditModel

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.authService.getUser(sessionStorage.getItem('userId'))
      .subscribe(data => {
        this.model = data
      })
  }

  edit() {
    this.authService.edit(this.model)
      .subscribe(editData => {
        this.toastr.success('Edit successful', 'success')
        sessionStorage.setItem('username', editData['username'])
        this.router.navigate([''])

      })
  }

}
