import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  imports: [NgStyle, NgIf],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css'
})
export class StructuraldirectiveComponent {
  inter: any = "";
  mul: any = "";
  name: boolean = true;
  change(){
    this.name=!this.name;
  }
  start() {
    if(this.inter){
      clearInterval(this.inter)
    }
    this.inter = setInterval(() => {
      let r = Math.ceil(Math.random() * 255)
      let g = Math.ceil(Math.random() * 255)
      let b = Math.ceil(Math.random() * 255)
      this.mul = {
        "background-color": "rgb(" + r + "," + g + "," + b + ")",
        "height": "100vh"
      }
    }, 100)


  }
  stop() {
    if(this.inter){
      clearInterval(this.inter)
    }
   
  }
}
