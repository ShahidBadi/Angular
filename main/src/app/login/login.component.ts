import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private _fb=inject(FormBuilder)
  private _router=inject(Router)
  loginform=this._fb.group({
    email:"",
    password:""
  })
  onsubmit(){
    const email=localStorage.getItem('email')
    const password=localStorage.getItem('password')
    console.log(email,password);
    console.log(this.loginform.value.email,this.loginform.value.password)
    
    if(this.loginform.value?.email==email && this.loginform.value?.password==password){
      this._router.navigate(['resume'])
    }
    else{
      alert("login invalid")
    }
  }

}
