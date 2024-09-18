import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

   technology = "Angular";

   location = "Bangolore";

   childStatus = "";

   handleDataPost(event:any){

    this.childStatus = event;
     console.log("I am in Parent Component and data is " , event )

   }



}
