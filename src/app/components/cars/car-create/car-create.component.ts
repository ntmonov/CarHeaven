import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../../core/models/view-models/car.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  public car: CarModel
  displacement: Array<number> = [1.2, 1.4, 1.6, 1.8, 2.0]
  fuel: Array<string> = ['gasoline', 'diesel', 'gas']
  yearOfProduction: Array<number> = []

  constructor() { 
    this.makeYearsArray()
    this.car = new CarModel('', '', this.displacement[0], this.fuel[0], this.yearOfProduction[0], 0 )
  }

  ngOnInit() {
}

  makeYearsArray() {
    for(let i=1984; i<= 2018;i++) {
      this.yearOfProduction.push(i)
    }
  }

  create() {
    console.log(this.car)
  }

}
