import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarModel } from '../models/input-models/car.model';
import { Observable } from 'rxjs';

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

  create(car: CarModel): Observable<CarModel>{
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    let headers = new HttpHeaders({
      'Authorization': 'Kinvey ' + sessionStorage.getItem('authtoken'),
      'Content-Type': 'application/json'
    })
    return this.http.post<CarModel>(url, JSON.stringify(car), { headers })
  }

  list(): Observable<Array<CarModel>> {
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    let headers = new HttpHeaders({
      'Authorization': 'Kinvey ' + sessionStorage.getItem('authtoken'),
      'Content-Type': 'application/json'
    })
    return this.http.get<Array<CarModel>>(url, { headers })
  }
  }

