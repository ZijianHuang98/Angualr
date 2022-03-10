import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-picture',
  templateUrl: './child-picture.component.html',
  styleUrls: ['./child-picture.component.css']
})
export class ChildPictureComponent implements OnInit {

  constructor() { }

  @Input()
  childName:string = ''

  ngOnInit(): void {
  }

}
