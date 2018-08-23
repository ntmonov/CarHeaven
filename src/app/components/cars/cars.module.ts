import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCreateComponent } from './car-create/car-create.component';
import { RouterModule } from '@angular/router';
import { carRoutes } from './cars.routing';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { MyCarsComponent } from './my-cars/my-cars.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carRoutes),
    FormsModule
  ],
  declarations: [CarCreateComponent, CarComponent, CarListComponent, CarDetailsComponent, EditCarComponent, DeleteCarComponent, MyCarsComponent],
  exports: [CarComponent]
})
export class CarsModule { }
