import { Component, OnInit, DoCheck } from '@angular/core';
import { SearchModel } from '../../../core/models/search.model';
import { SearchService } from '../../../core/services/search.service';
import { CarModel } from '../../../core/models/car.model';
 
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, DoCheck {
  
  public carSearch: SearchModel
  public filteredCars: CarModel[] = []
  public cars: CarModel[] = []
  public searchSuccess: boolean = false

  constructor(
    private searchService: SearchService
  ) { 
    this.carSearch = new SearchModel('','',0,500)
  }
  
  ngOnInit() {
    this.searchService.getAll()
      .subscribe(data => {
        for(let item of data) {
          this.cars.push(item)
        }
      })
  }

  search() {
    this.filteredCars = []

    let make = this.carSearch.make ? this.carSearch.make : ''
    let model = this.carSearch.model ? this.carSearch.model : ''
    let minPower = this.carSearch.minPower ? Number(this.carSearch.minPower) : 0
    let maxPower = this.carSearch.maxPower ? Number(this.carSearch.maxPower) : 500

    for(let car of this.cars) {
      if ((car['make'].includes(make) && car['model'].includes(model)) && (car['power'] >= minPower && car['power'] <= maxPower)) {
        this.filteredCars.push(car)
      }
    }

    this.searchSuccess = true
  }

  ngDoCheck(): void {
  }

  sort(type: string) {
    switch (type) {
      case 'priceA': {
        this.filteredCars.sort((a, b) => { return a.price - b.price })
      } break
      case 'priceD': {
        this.filteredCars.sort((a, b) => { return b.price - a.price })
      } break
      case 'dateA': {
        this.filteredCars.sort((a, b) => { return Number(new Date(a.created)) - Number(new Date(b.created)) })
      } break
      case 'dateD': {
        this.filteredCars.sort((a, b) => { return Number(new Date(b.created)) - Number(new Date(a.created)) })
      } break
    }
  }

}
