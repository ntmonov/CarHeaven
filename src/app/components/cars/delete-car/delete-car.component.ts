import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../../core/services/cars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  public id: string

  constructor(private route: ActivatedRoute,
    private carService: CarsService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.carService.delete(this.id).subscribe(data => {
      this.toastr.success('Deleted', 'Success')
      this.router.navigate(['cars/list'])
    },
       err => {
         this.toastr.error('Cannot delete', 'Error')
         this.router.navigate(['cars/list'])

       })
  }

}
