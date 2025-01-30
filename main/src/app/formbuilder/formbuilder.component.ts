import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {
  private _fb=inject(FormBuilder)
  userform:FormGroup=this._fb.group({
    username:this._fb.control('',[Validators.required,Validators.minLength(3)]),
    password:this._fb.control('',[Validators.required,Validators.minLength(3)]),
    contact:this._fb.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    spi:this._fb.control('',[Validators.required,Validators.min(0),Validators.max(10)])
  })
  addemail(){
    this.userform.addControl('email',this._fb.control('',[Validators.required,Validators.email]))
  }
  removeemail(){
    this.userform.removeControl('email')
  }


}

// email:this._fb.control('',[Validators.required,Validators.email]),
