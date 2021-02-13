import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

panier:number=0;
 public clickEventHandler(){

  }
handleplus():void{
  this.panier++;
}

  title = 'HightTechFront';
}
