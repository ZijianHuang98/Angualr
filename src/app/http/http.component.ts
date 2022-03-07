import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  productList: object[] =[]
  constructor(private http:HttpClient) { }
  public loadMore():void{
    let url:string = null
    this.http.get(url).subscribe((res:any)=>{
      console.log('get the information')
      console.log(res.data)
      this.productList = res.data
    })
  }
  //asyn request 
  ngOnInit(): void {
  }
}
