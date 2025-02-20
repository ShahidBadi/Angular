import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifacultyService {

  private _http=inject(HttpClient)
  getAllfaculty(){
   return this._http.get("https://67b583d807ba6e59083d19f6.mockapi.io/faculty")
  
  }
}
