import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrayobjectcrud',
  imports: [FormsModule,NgFor],
  templateUrl: './arrayobjectcrud.component.html',
  styleUrl: './arrayobjectcrud.component.css'
})
export class ArrayobjectcrudComponent {
  title = 'CRUD_2D';
  isedit = -1
  arr = [
    {
      fname: "shahid",
      lname: "badi",
      department: "CE"
    },
    {
      fname: "vidit",
      lname: "khant",
      department: "CE"
    },
    {
      fname: "prince",
      lname: "separiya",
      department: "CE"
    }
  ]
  obj = {
    fname: "",
    lname: "",
    department: ""
  }

  insert() {
    if (this.isedit == -1) {
      this.arr.push({ ...this.obj })
      this.obj.fname = ""
      this.obj.lname = ""
      this.obj.department = ""
      return;
    }
    this.arr[this.isedit].fname = this.obj.fname;
    this.arr[this.isedit].lname = this.obj.lname;
    this.arr[this.isedit].department = this.obj.department;
    this.isedit=-1;
    this.obj.fname = ""
    this.obj.lname = ""
    this.obj.department = ""

  }
  deletedata(index: number) {
    this.arr.splice(index, 1)
  }
  updatedata(index: number) {
    this.isedit = index;
    this.obj.fname = this.arr[this.isedit].fname;
    this.obj.lname = this.arr[this.isedit].lname;
    this.obj.department = this.arr[this.isedit].department;
  }
}
