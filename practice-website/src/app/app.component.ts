import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  firstname='';
  lastname='';
  images='';
  image=''
  printfirst(e:any){
   this.firstname=e.target.value
  }
  printlast(e:any){
    this.lastname=e.target.value
   }
   printimage(e:any){
    this.images=e.target.value;
   }
   imagesize(e:any){
    this.image=e.target.value;
   }
}
