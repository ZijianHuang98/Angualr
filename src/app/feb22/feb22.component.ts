import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feb22',
  templateUrl: './feb22.component.html',
  styleUrls: ['./feb22.component.css']
})
export class Feb22Component implements OnInit {
  toDoList = ['meeting','eating','sexing']
  user = ''
  doDelete(num){
    this.toDoList.splice(num,1)
  }
  doAdd(){
    this.toDoList.push(this.user)
    this.user = ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
