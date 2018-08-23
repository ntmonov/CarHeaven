import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { searchRoutes } from './search.routing';
import { FormsModule } from '@angular/forms';
import { CarsModule } from '../cars/cars.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
    FormsModule,
    CarsModule
  ],
  declarations: [SearchPageComponent]
})
export class SearchModule { }
