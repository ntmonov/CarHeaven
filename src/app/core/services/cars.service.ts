import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car.model';

const appKey = 'kid_HkCipCMU7'
const appSecret = 'da9a8ad659614f5f82b29cf0e66b8e19'
const baseUrl = 'https://baas.kinvey.com/'
const module = 'appdata'
const collection = 'cars'

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

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

  create(car: CarModel): Observable<CarModel>{
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.post<CarModel>(url, JSON.stringify(car), { headers })
  }

  list(): Observable<Array<CarModel>> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.get<Array<CarModel>>(url, { headers })
  }

  details(id): Observable<CarModel> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}/${id}`
    return this.http.get<CarModel>(url, { headers })  
  }

  getById(id) : Observable<CarModel> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}/${id}`
    return this.http.get<CarModel>(url, { headers })  
  }

  edit(car: CarModel) : Observable<CarModel> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}/${car['_id']}`
    return this.http.put<CarModel>(url, JSON.stringify(car), { headers })
  }

  delete(id) {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}/${id}`
    return this.http.delete(url, { headers })
  }

  getAuthor(carId: string): Observable<Object> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}/${carId}`
    return this.http.get<Observable<Object>>(url, { headers })
  }

  getMyCars(userId: string): Observable<Array<CarModel>> {
    let headers = this.cteateAuthHeaders('Kinvey')
    let url = `${baseUrl}${module}/${appKey}/${collection}/?query={"_acl.creator":"${userId}"}`
    return this.http.get<Array<CarModel>>(url, { headers })
  }
}

