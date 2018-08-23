import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchModel } from '../models/search.model';
import { CarModel } from '../models/car.model';

const appKey = 'kid_HkCipCMU7'
const baseUrl = 'https://baas.kinvey.com/'
const module = 'appdata'
const collection = 'cars'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<CarModel[]>{
    let url = `${baseUrl}${module}/${appKey}/${collection}`
    return this.http.get<CarModel[]>(url)
  }
}
