import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { CarModel } from '../../../core/models/car.model';
import { CarsService } from '../../../core/services/cars.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, DoCheck {
  
  private carAuthor: string
  public isAuthor: boolean

  constructor( private carService: CarsService, private toastr: ToastrService, private router: Router ) { }

  @Input('car') car: CarModel

 
  ngOnInit() {
    this.carService.getAuthor(this.car['id']).subscribe(data => {this.carAuthor = data['_acl']['creator']})
  }


  ngDoCheck(): void {
    this.isAuthor = this.carAuthor === sessionStorage.getItem('userId')
  }




}
