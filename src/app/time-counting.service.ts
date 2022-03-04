import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeCountingService {
  start = 0;
  end = 0;
  constructor() {
    console.log('a timer is created')
  }
  startf() {
    this.start = new Date().getTime()
  }
  endf(actionName) {
    this.end = new Date().getTime()
    console.log(actionName , 'the time cost is ', this.end - this.start)
  }
}
