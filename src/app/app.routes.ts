import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { AboutComponent } from './about/about.component'; 
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home', component: HomeComponent ,title:'Home'},
    {path:'our-customers', component: OurCustomersComponent,title:'our-customers'},
    {path:'about', component:AboutComponent ,title:'about'},
    {path:'contacts', component:ContactsComponent ,title:'contacts'},  
    {path:'projects', component:ProjectsComponent ,title:'projects',children:[
        {path: 'web',component:WebComponent},
        {path: 'mobile',component:MobileComponent},
    ]},  
    {path:'**', component:NotfoundComponent }, 
];
