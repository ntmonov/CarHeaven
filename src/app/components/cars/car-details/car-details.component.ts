import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from '../../../core/models/car.model';
import { CarsService } from '../../../core/services/cars.service';
import { RegisterModel } from '../../../core/models/register.model';
import { ContactModel } from '../../../core/models/contacts.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public id: string
  car: CarModel
  user: ContactModel
  isShown: boolean = false

  constructor(private route: ActivatedRoute,
              private carService: CarsService,
              private authService: AuthService
            ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.carService.details(this.id).subscribe(car => {
      this.car = car
    })
    
    this.authService.getContact(sessionStorage.getItem('userId'))
        .subscribe(data => {
          this.user = data[0]
        })
  }

  toggle() {
    this.isShown = !this.isShown
  }
}
