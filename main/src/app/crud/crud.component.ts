import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [FormsModule,NgFor],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  value:any="";
  id:any="";
  button="insert"
  editid:any=-1
  arr=["shahid","badi","wankaner"]
  // secarr=[...this.arr]
  insert(){
    if(this.value!="" && this.editid<0)
    {
        this.arr.push(this.value);
        
      // this.arr=[...this.secarr]
    }
    this.arr[this.editid] = this.value;
        this.editid = -1;
        this.button="insert"
    

    this.value=""
  }
  delete(id:any){
    this.arr.splice(id,1)
    // this.arr=[...this.secarr]
  }
  update(id:number){
    let bool=confirm("confirm to update")
    if(bool){
      this.value=this.arr[id]
      this.editid=id;
      this.button="update"
    }
  }
  searchval:any=""
  searchname:any=""
  index:any=""
  // search(){
  //    if(this.searchval="")
  //    {
  //     this.arr=[...this.secarr]
  //    }
  //    this.arr=this.arr.filter((elem)=>{elem.toLowerCase().includes(this.searchval.toLowerCase())})
  // }
  search() {
    return this.arr.filter((item: string) =>
      item.toLowerCase().includes(this.searchval.toLowerCase())
    );
}
}
