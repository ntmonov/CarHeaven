import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../../core/models/car.model';
import { CarsService } from '../../../core/services/cars.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  public car: CarModel
  fuel: Array<string> = ['gasoline', 'diesel', 'gas']
  yearOfProduction: Array<number> = []

  constructor( private carService: CarsService, private toastr: ToastrService, private router: Router ) { 
    this.makeYearsArray()
    this.car = new CarModel('','','',0,'',this.yearOfProduction[0],0,0,)
  }

  ngOnInit() {
}

  makeYearsArray() {
    for(let i=1984; i<= 2018;i++) {
      this.yearOfProduction.push(i)
    }
  }

  create(form: NgForm) {
    if (!form.value['imageUrl']) {
      form.value['imageUrl'] = '../../../../assets/noImg.png'
    }
    this.carService.create(form.value).subscribe(data => {
      this.toastr.success('Car created', 'Success')
      this.router.navigate(['cars/list'])
    }, err => {
      console.log(err)
    })
  }

}
