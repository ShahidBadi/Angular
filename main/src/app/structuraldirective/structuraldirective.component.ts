import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structuraldirective',
  imports: [NgStyle,NgIf,FormsModule,NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass],
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
  day:any=""
  day2:any=""
  dayp(){
  this.day=this.day2.toLowerCase()
  }

  h:any={
    'first':true,
    'second':true
  }
}
