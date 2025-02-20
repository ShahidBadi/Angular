import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ArrayobjectcrudComponent } from './arrayobjectcrud/arrayobjectcrud.component';
import { ResumeComponent } from './resume/resume.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { DetailfacultyComponent } from './detailfaculty/detailfaculty.component';


export const routes: Routes = [
    {path:'crud',component:CrudComponent},
    {path:'arrayobjectcrud',component:ArrayobjectcrudComponent},
    {path:'resume',component:ResumeComponent},
    {path:'structural',component:StructuraldirectiveComponent},
    {path:'templatedriven',component:TemplatedrivenComponent},
    {path:'reactiveform',component:ReactiveformsComponent},
    {path:'formbuilder',component:FormbuilderComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'faculty',component:FacultyComponent},
    {path:'faculty/:id',component:DetailfacultyComponent}
];
