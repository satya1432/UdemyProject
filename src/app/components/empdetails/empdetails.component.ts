import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { SubmitComponent } from '../submit/submit.component';
// import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css'],
})
export class EmpdetailsComponent implements OnInit {
  @Input() formData:any;
@Output() closeView= new EventEmitter();
bgColor:string;
  constructor() { }
  ngOnInit() {
    this.bgColor='pink';
  }


  CloseView() {
   this.closeView.emit(false)
  }
 

}
