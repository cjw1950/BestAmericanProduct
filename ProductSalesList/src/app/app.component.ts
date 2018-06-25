import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Best American Product';
  content=[];
  constructor(){
     for(let i=1;i<1000;i++){
      this.content.push(('Charles '+i);
     }
  }


}
