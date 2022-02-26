import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feb21',
  templateUrl: './feb21.component.html',
  styleUrls: ['./feb21.component.css']
})
export class Feb21Component implements OnInit {

  userLevel = 'normal'
  // userLevel = 'vip'
  // userLevel = 'svip'
  constructor() { }

  ngOnInit(): void {
  }

}
