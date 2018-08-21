import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from '../../../core/models/car.model';
import { CarsService } from '../../../core/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public id: string
  car: CarModel

  constructor(private route: ActivatedRoute,
              private carService: CarsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.carService.details(this.id).subscribe(car => {
      this.car = car
    },
       err => {

       })
  }
}
