import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-child-modtify',
  templateUrl: './child-modtify.component.html',
  styleUrls: ['./child-modtify.component.css']
})
export class ChildModtifyComponent implements OnInit {


  inputName:string = null
  @Output()
  launch = new EventEmitter()
  constructor() { }
  getModify(){
    console.log(this.inputName)
    this.launch.emit(this.inputName)

  }
  ngOnInit(): void {
  }

}
