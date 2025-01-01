import { Routes } from '@angular/router';
import { CentercolumnComponent } from './centercolumn/centercolumn.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';

export const routes: Routes = [
    {path:'centercolumn', component:CentercolumnComponent},
    {path:'header2',component:Header2Component},
    {path:'header3',component:Header3Component}
];
