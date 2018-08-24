import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent implements OnInit {

  username: string
  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username')
  }

}
