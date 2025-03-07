import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifacultyService {

  private _http=inject(HttpClient)
  getAllfaculty(){
   return this._http.get("https://67b583d807ba6e59083d19f6.mockapi.io"+"/faculty")
  }
  getById(id:number){
    return this._http.get("https://67b583d807ba6e59083d19f6.mockapi.io"+"/faculty/"+id)
  }
  deletefac(id:number){
    return this._http.delete("https://67b583d807ba6e59083d19f6.mockapi.io"+"/faculty/"+id) 
  }
}
