import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApifacultyService } from '../apifaculty.service';

@Component({
  selector: 'app-detailfaculty',
  imports: [RouterLink],
  templateUrl: './detailfaculty.component.html',
  styleUrl: './detailfaculty.component.css'
})
export class DetailfacultyComponent {
  private _actroute=inject(ActivatedRoute)
   private _api=inject(ApifacultyService)
   data:any=[]
  ngOnInit(){
    const id=this._actroute.snapshot.params["id"];
    this._api.getById(id).subscribe((res)=>{
      this.data=res;
    })
  }
}
