import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterModel } from '../models/register.model';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { ContactModel } from '../models/contacts.model';

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
    delete user.repeatPass
    return this.http.post<RegisterModel>(url,user)
  }

  login(user: LoginModel): Observable<LoginModel> {
    let url = `${baseUrl}${userModule}/${appKey}/${loginEndPoint}`
    return this.http.post<LoginModel>(url, JSON.stringify(user))
  }

  logout() {
    let url = `${baseUrl}${userModule}/${appKey}/${logoutEndPoint}`
    return this.http.post(url, '')
  }

  getContact(userId : string): Observable<ContactModel> {
    let url = `${baseUrl}${userModule}/${appKey}/?query={"_id":"${userId}"}`
    return this.http.get<ContactModel>(url)
  }

   
}
