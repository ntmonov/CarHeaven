import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterModel } from '../../../core/models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public users
  public user: RegisterModel

  constructor(private authService : AuthService,
              private router: Router            
  ) { }

  ngOnInit() {
    this.authService.getAllUsers()
      .subscribe(data => {
        this.users = data
      })
  }

  getUser(userId: string) {
    let user: RegisterModel
    this.authService.getUser(userId)
      .subscribe(data => {this.user = data,
        this.block(this.user)
      })
  }

  block(user: RegisterModel) {
    this.user.isBlocked = !this.user.isBlocked
    sessionStorage.setItem('isBlocked', this.user.isBlocked.toString())
    this.authService.lock(user)
      .subscribe(data => {
        console.log('User mode changed')
        this.router.navigate([''])

      })
  }

}
