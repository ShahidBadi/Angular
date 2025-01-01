import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  value:any="";
  id:any="";
  button="insert"
  editid:any=-1
  arr=["shahid","badi","wankaner"]
  insert(){
    if(this.value!="")
    {
      if(this.editid<0){
        this.arr.push(this.value);
      }
      else{
        this.arr[this.editid] = this.value;
        this.editid = -1;
        this.button="insert"
      }
    }
    

    this.value=""
  }
  delete(id:any){
    this.arr.splice(id,1)
  }
  update(id:number){
      this.value=this.arr[id]
      this.editid=id;
      this.button="update"
  }
}
