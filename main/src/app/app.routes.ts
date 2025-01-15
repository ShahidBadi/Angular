import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ArrayobjectcrudComponent } from './arrayobjectcrud/arrayobjectcrud.component';
import { ResumeComponent } from './resume/resume.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';


export const routes: Routes = [
    {path:'crud',component:CrudComponent},
    {path:'arrayobjectcrud',component:ArrayobjectcrudComponent},
    {path:'resume',component:ResumeComponent},
    {path:'structural',component:StructuraldirectiveComponent}
];
