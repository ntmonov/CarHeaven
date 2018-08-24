import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterModel } from '../models/register.model';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { ContactModel } from '../models/contacts.model';
import { EditModel } from '../models/edit.model';

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

  private cteateAuthHeaders(type: string) : HttpHeaders {
    if (type == 'Basic') {
      return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
            'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`,
            'Content-Type': 'application/json'
      })
    }
  }

  isLoggedIn(): boolean {
    return this.currentAuthToken === sessionStorage.getItem('authtoken')
  }

  isBlocked(): boolean {
    return sessionStorage.getItem('isBlocked') === 'true'
  }

  isAdmin() : boolean {
    return sessionStorage.getItem('isAdmin') === 'true'
  }

  register(user: RegisterModel): Observable<RegisterModel> {
    let headers = this.cteateAuthHeaders('Basic')
    let url = `${baseUrl}${userModule}/${appKey}`
    delete user.repeatPass
    user.isBlocked = false
    return this.http.post<RegisterModel>(url,user, { headers })
  }

  login(user: LoginModel): Observable<LoginModel> {
    let headers = this.cteateAuthHeaders('Basic')
    let url = `${baseUrl}${userModule}/${appKey}/${loginEndPoint}`
    return this.http.post<LoginModel>(url, JSON.stringify(user), { headers })
  }

  logout() {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${userModule}/${appKey}/${logoutEndPoint}`
    return this.http.post(url, '', { headers })
  }

  getContact(userId : string): Observable<ContactModel> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${userModule}/${appKey}/?query={"_id":"${userId}"}`
    return this.http.get<ContactModel>(url, { headers })
  }

  // getRole(userId : string) {
  //   let url = `${userModule}/${appKey}/${userId}/roles`
  //   return this.http.get(url)
  // }

  getAllUsers() {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `https://baas.kinvey.com/${userModule}/${appKey}`
    return this.http.get(url, { headers })
  }

  lock(user: RegisterModel) {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `https://baas.kinvey.com/${userModule}/${appKey}/${user['_id']}`
    return this.http.put(url, JSON.stringify(user) , { headers })
  }
  
  getUser(userId: string): Observable<RegisterModel>{
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `https://baas.kinvey.com/${userModule}/${appKey}/${userId}`
    return this.http.get<RegisterModel>(url, { headers })
  }

  edit(user: EditModel): Observable<EditModel>{
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `https://baas.kinvey.com/${userModule}/${appKey}/${user['_id']}`
    return this.http.put<EditModel>(url, user, { headers })

  }
}
