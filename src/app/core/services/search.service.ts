import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchModel } from '../models/search.model';
import { CarModel } from '../models/car.model';

const appKey = 'kid_HkCipCMU7'
const appSecret = 'da9a8ad659614f5f82b29cf0e66b8e19'
const baseUrl = 'https://baas.kinvey.com/'
const loginEndPoint = 'login'
const logoutEndPoint = '_logout'
const userModule = 'user'
const collection = 'cars'
const module = 'appdata'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

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


  getAll(): Observable<CarModel[]>{
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.get<CarModel[]>(url, { headers })
  }
}
