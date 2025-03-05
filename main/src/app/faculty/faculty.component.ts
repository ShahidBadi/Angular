import { Component, inject } from '@angular/core';
import { ApifacultyService } from '../apifaculty.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faculty',
  imports: [NgFor, RouterLink],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  private _api = inject(ApifacultyService)

  faculty: any = []
  ngOnInit() {
    this._api.getAllfaculty().subscribe((data) => {
      this.faculty = data
    })
  }

  deletefac(id: number) {
    this._api.deletefac(id).subscribe((res: any)=>{
      this.ngOnInit()
    })
  }
}
