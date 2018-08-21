import { Component, OnInit, Input } from '@angular/core';
import { CarModel } from '../../../core/models/car.model';
import { CarsService } from '../../../core/services/cars.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  constructor( private carService: CarsService, private toastr: ToastrService, private router: Router ) { }

  @Input('car') car: CarModel


  ngOnInit() {
    
  }

}
