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

  create(car: CarModel): Observable<CarModel>{
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.post<CarModel>(url, JSON.stringify(car))
  }

  list(): Observable<Array<CarModel>> {
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.get<Array<CarModel>>(url)
  }

  details(id): Observable<CarModel> {
    let url = `${baseUrl}${module}/${appKey}/${collection}/${id}`
    return this.http.get<CarModel>(url)  
  }

  getById(id) : Observable<CarModel> {
    let url = `${baseUrl}${module}/${appKey}/${collection}/${id}`
    return this.http.get<CarModel>(url)  
  }

  edit(car: CarModel) : Observable<CarModel> {
    let url = `${baseUrl}${module}/${appKey}/${collection}/${car['_id']}`
    return this.http.put<CarModel>(url, JSON.stringify(car))
  }

  delete(id) {
    let url = `${baseUrl}${module}/${appKey}/${collection}/${id}`
    return this.http.delete(url)
  }

  getAuthor(carId: string): Observable<Object> {
    let url = `${baseUrl}${module}/${appKey}/${collection}/${carId}`
    return this.http.get<Observable<Object>>(url)
  }

}

