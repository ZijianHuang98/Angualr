import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-dependancy',
  templateUrl: './dependancy.component.html',
  styleUrls: ['./dependancy.component.css']
})
export class DependancyComponent implements OnInit {
  log = null
  constructor(abc: LogService) {
    this.log = abc
   }
  doAdd(){
  console.log("do add")
  let action = 'add xxx to my cart'
  this.log.doLog(action)
  // let uname ='zijian'
  // let time = new Date().getTime()
  // let action = 'do some thing '
  // console.log(`admin: ${uname} ${time} ${action}`)
  } 
doDelete(){
  console.log('do delete')
  let action = 'delete xxx from my cart'
  this.log.doLog(action)
  // let uname ='miao'
  // let time = new Date().getTime()
  // let action = 'delete some thing '
  // console.log(`admin: ${uname} ${time} ${action}`)
}
  ngOnInit(): void {
  }
}