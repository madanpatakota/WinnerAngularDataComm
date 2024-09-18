import { Component, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {

  @Input('ITechnology') ITechnology:any;

  @Input('ILocation') ILocation:any;



  // @output   --> you are posting the data.

  // eventemitter

  @Output("dataPost") datapost = new EventEmitter<string>();

  Post(){
      console.log("I am in CompA Component and data is iam passing");
      this.datapost.emit("Data from COMPA");
  }



}
