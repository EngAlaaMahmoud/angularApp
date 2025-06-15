import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'our-customers', component: OurCustomersComponent},
    {path:'about', component:AboutComponent },
    {path:'footer', component:FooterComponent },  
    {path:'contacts', component:ContactsComponent },  
    {path:'projects', component:ProjectsComponent ,children:[
        {path: 'web',component:WebComponent},
        {path: 'mobile',component:MobileComponent},
    ]},  
    {path:'**', component:NotfoundComponent }, 
];
