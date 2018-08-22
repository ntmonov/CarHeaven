import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterModel } from '../models/register.model';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

const appKey = 'kid_HkCipCMU7'
const appSecret = 'da9a8ad659614f5f82b29cf0e66b8e19'
const baseUrl = 'https://baas.kinvey.com/'
const loginEndPoint = 'login'
const logoutEndPoint = '_logout'
const userModule = 'user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentAuthToken: string
  
  constructor(
    private http: HttpClient
  ) { }

  get authtoken() {
    return this.currentAuthToken
  }

  set authtoken(value: string) {
    this.currentAuthToken = value
  }

  isLoggedIn() {
    return this.currentAuthToken === sessionStorage.getItem('authtoken')
  }

  register(user: RegisterModel): Observable<RegisterModel> {
    let url = `${baseUrl}${userModule}/${appKey}`
    let headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
      'Content-Type': 'application/json'
    })
    delete user.repeatPass
    return this.http.post<RegisterModel>(url,user,{ headers })
  }

  login(user: LoginModel): Observable<LoginModel> {
    let url = `${baseUrl}${userModule}/${appKey}/${loginEndPoint}`
    let headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
      'Content-Type': 'application/json'
    })
    return this.http.post<LoginModel>(url, JSON.stringify(user), { headers })
  }

  logout() {
    let url = `${baseUrl}${userModule}/${appKey}/${logoutEndPoint}`
    let headers = new HttpHeaders({
      'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`,
      'Content-Type': 'application/json'
    })
    return this.http.post(url, '', { headers })
  }

   
}
