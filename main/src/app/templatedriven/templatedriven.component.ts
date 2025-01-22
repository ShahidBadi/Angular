import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  imports: [FormsModule,NgIf,NgStyle],
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.css'
})
export class TemplatedrivenComponent {
  user:any={
    username:"",
    email:"",
    contact:"",
    spi:""
  }
  

}
