import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../../core/models/input-models/car.model';
import { CarsService } from '../../../core/services/cars.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  public car: CarModel
  fuel: Array<string> = ['gasoline', 'diesel', 'gas']
  yearOfProduction: Array<number> = []

  constructor( private carService: CarsService ) { 
    this.makeYearsArray()
    this.car = new CarModel('', '', 0, this.fuel[0], this.yearOfProduction[0], 0 , 0,'')
  }

  ngOnInit() {
}

  makeYearsArray() {
    for(let i=1984; i<= 2018;i++) {
      this.yearOfProduction.push(i)
    }
  }

  create(form: NgForm) {
    this.carService.create(form.value).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }

}
