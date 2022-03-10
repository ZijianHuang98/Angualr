import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-blog',
  templateUrl: './parent-blog.component.html',
  styleUrls: ['./parent-blog.component.css']
})
export class ParentBlogComponent implements OnInit {
  public userName: string = 'Zijian'
  doChange(e){
    this.userName = e
  }

  constructor() { }

  ngOnInit(): void {
  }

}
