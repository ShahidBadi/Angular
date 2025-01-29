import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {
    userform=new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email],),
      contact:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
      spi:new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
    })

}
