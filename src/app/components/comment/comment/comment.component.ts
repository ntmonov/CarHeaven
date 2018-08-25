import { CommentService } from '../../../core/services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../../core/services/cars.service';
import { CommentModel } from '../../../core/models/comment.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService: CommentService, private route: ActivatedRoute, 
              private carService: CarsService, private router: Router,
              private location: Location) {
    this.model = new CommentModel('','','') 
   }

  public carId: string
  public comments: CommentModel[]
  public model: CommentModel

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id')
    this.commentService.getComments(this.carId)
      .subscribe(data => this.comments = data)
  }
   
  post() {
    this.model.carId = this.carId
    this.model.author = sessionStorage.getItem('username')
    this.commentService.create(this.model)
      .subscribe(data => {
        let path = this.router.routerState.snapshot.url
        this.router.navigate(['cars/list'])
      })
  }

}
