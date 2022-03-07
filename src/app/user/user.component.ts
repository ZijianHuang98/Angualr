import { Component, OnInit } from '@angular/core';
import { TimeCountingService } from '../time-counting.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  demo = 1;
  timer:TimeCountingService = null
  constructor(timer: TimeCountingService) {
    this.timer = timer
  }
  doLog() {
    //let start = new Date().getTime()
    console.log('log in ....')
    this.timer.startf()
    this.timer.endf('log in')
    //let end = new Date().getTime()
    console.log('log in success....')
  }
  doReg() {
    console.log(' registering ...')
    this.timer.startf()
    this.timer.endf('register')
    console.log(' register success ...')
  }
  ngOnInit(): void {
  }

}
