import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentModel } from '../models/comment.model';
import { Observable } from 'rxjs';

const appKey = 'kid_HkCipCMU7'
const appSecret = 'da9a8ad659614f5f82b29cf0e66b8e19'
const baseUrl = 'https://baas.kinvey.com/'
const loginEndPoint = 'login'
const logoutEndPoint = '_logout'
const userModule = 'user'
const module = 'appdata'
const collection = 'comments'



@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http: HttpClient ) { }

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

  getComments(carId): Observable<Array<CommentModel>> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}/?query={"carId":"${carId}"}`
    return this.http.get<Array<CommentModel>>(url, { headers })
  }

  create(comment: CommentModel) : Observable<CommentModel>{
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.post<CommentModel>(url, JSON.stringify(comment), { headers })

  }
} 
