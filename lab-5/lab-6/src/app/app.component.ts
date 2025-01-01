import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-6';
  temp=""
  print(e:any){
    this.temp=e.target.value
  }
  display(){
    console.log("hello");
  }
  count=0;
  inc(){
    this.count+=1;
  }
  dec(){
    this.count-=1;
  }
  d=new Date();
}
