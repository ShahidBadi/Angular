import { Component, inject } from '@angular/core';
import { ApifacultyService } from '../apifaculty.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-faculty',
  imports: [NgFor],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
    private _api=inject(ApifacultyService)

    faculty:any=[]
    ngOnInit(){
      this._api.getAllfaculty().subscribe((data) => {
        
        this.faculty=data
      })  
      }
}
