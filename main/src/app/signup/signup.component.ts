import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private _fb=inject(FormBuilder)
  private _router=inject(Router)
  signupform=this._fb.group({
    username:"",
    email:"",
    password:""
  })
 onsubmit(){
  localStorage.setItem('email',this.signupform.value?.email!)
  localStorage.setItem('password',this.signupform.value?.password!)
  this._router.navigate(['login'])
 }
}
