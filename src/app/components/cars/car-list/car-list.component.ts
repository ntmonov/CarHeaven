import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../../core/models/car.model';
import { CarsService } from '../../../core/services/cars.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public cars: Array<CarModel> =[]
  constructor(  
    private carService: CarsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.carService.list().subscribe(data => {
      for(let i=0;i<data.length;i++) {
        this.cars.push(data[i])
        this.cars[i].id = data[i]['_id']
      }
      this.toastr.success('Success', 'success', {timeOut: 1000})
    }, err => {
      console.log(err)
    })
  }

}
