import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarsService } from '../../../core/services/cars.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CarModel } from '../../../core/models/car.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  
  public car: CarModel
  public id: string
  fuel: Array<string> = ['gasoline', 'diesel', 'gas']
  yearOfProduction: Array<number> = []

  constructor( 
    private carService: CarsService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.makeYearsArray()
    this.car = new CarModel('', '','', 0, this.fuel[0], this.yearOfProduction[0], 0, 0, new Date(),'', '')
  }

  
  makeYearsArray() {
    for(let i=1984; i<= 2018;i++) {
      this.yearOfProduction.push(i)
    }
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.carService.getById(this.id)
      .subscribe(car => {
        this.car = car
      }
      ,err => {

      })
  }

  edit() {    

    this.car['_id'] = this.id

    this.carService.edit(this.car)
      .subscribe(data => {
        this.toastr.success('Car changed', 'Success')
        this.router.navigate(['cars/list'])
      }, err => {

      })
  }
}
