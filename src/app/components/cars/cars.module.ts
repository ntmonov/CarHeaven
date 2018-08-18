import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCreateComponent } from './car-create/car-create.component';
import { RouterModule } from '@angular/router';
import { carRoutes } from './cars.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carRoutes),
    FormsModule
  ],
  declarations: [CarCreateComponent]
})
export class CarsModule { }
