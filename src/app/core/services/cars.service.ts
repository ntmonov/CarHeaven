import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from '../models/view-models/car.model';

const appKey = 'kid_HkCipCMU7'
const appSecret = 'da9a8ad659614f5f82b29cf0e66b8e19'
const baseUrl = 'https://baas.kinvey.com/'
const module = 'appdata'

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  create(car: CarModel) {
    
  }
}
