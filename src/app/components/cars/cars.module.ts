import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCreateComponent } from './car-create/car-create.component';
import { RouterModule } from '@angular/router';
import { carRoutes } from './cars.routing';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carRoutes),
    FormsModule
  ],
  declarations: [CarCreateComponent, CarComponent, CarListComponent, CarDetailsComponent]
})
export class CarsModule { }
