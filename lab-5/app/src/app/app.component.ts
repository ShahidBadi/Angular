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
  title = 'demo app';
  date=new Date();

  stu={
    name:"badi",
    rollno:"564",
    Sem:"4"
  }
   
  cur=20000;  
  val=8.35;

  isdisable=true;
  cl="green";
}
