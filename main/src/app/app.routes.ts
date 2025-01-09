import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ArrayobjectcrudComponent } from './arrayobjectcrud/arrayobjectcrud.component';


export const routes: Routes = [
    {path:'crud',component:CrudComponent},
    {path:'arrayobjectcrud',component:ArrayobjectcrudComponent}
];
