import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(data => {
        this.toastr.success('Logged out successfuly', 'success', {timeOut: 1000})
        sessionStorage.clear()
        this.authService.authtoken = ''
        this.username = ''
        this.router.navigate(['home'])

      }, err => {
        this.toastr.error('Logged out failed', 'error')
      })
  }

}
