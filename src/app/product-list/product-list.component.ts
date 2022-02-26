import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  eList = [
    {eid:101,ename: 'zijian', wage:70000,sex:1, age:24},
    {eid:102,ename: 'miao', wage:60000,sex:0, age:29},
    {eid:103,ename: 'hao', wage:50000,sex:1, age:25},
    {eid:104,ename: 'mao', wage:40000,sex:1, age:25}
  ]
  doDelete(num: number){
    this.eList.splice(num,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
