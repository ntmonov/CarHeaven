import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../models/comment.model';
import { Observable } from 'rxjs';

const appKey = 'kid_HkCipCMU7'
const appSecret = 'da9a8ad659614f5f82b29cf0e66b8e19'
const baseUrl = 'https://baas.kinvey.com/'
const module = 'appdata'
const collection = 'comments'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http: HttpClient ) { }

  getComments(carId): Observable<Array<CommentModel>> {
    let url = `${baseUrl}${module}/${appKey}/${collection}/?query={"carId":"${carId}"}`
    return this.http.get<Array<CommentModel>>(url)
  }

  create(comment: CommentModel) : Observable<CommentModel>{
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.post<CommentModel>(url, JSON.stringify(comment))

  }
} 
