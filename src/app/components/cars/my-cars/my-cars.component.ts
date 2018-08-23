import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../core/services/cars.service';
import { CarModel } from '../../../core/models/car.model';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit {
  public cars: Array<CarModel> =[]

  constructor( 
    private carService: CarsService
  ) { }

  ngOnInit() {
    this.carService.getMyCars(sessionStorage.getItem('userId'))
      .subscribe(data => {
        this.cars = data
      }, err =>{})
  }

  sort(type: string) {
    switch (type) {
      case 'priceA': {
        this.cars.sort((a, b) => { return a.price - b.price })
      } break
      case 'priceD': {
        this.cars.sort((a, b) => { return b.price - a.price })
      } break
      case 'dateA': {
        this.cars.sort((a, b) => { return Number(new Date(a.created)) - Number(new Date(b.created)) })
      } break
      case 'dateD': {
        this.cars.sort((a, b) => { return Number(new Date(b.created)) - Number(new Date(a.created)) })
      } break
    }
  }
}
