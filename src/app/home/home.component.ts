import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
import { TestUsersServiceService, user } from '../test-users-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  userHomeLst:user[]=[];
  constructor(private _userSvc:TestUsersServiceService){
   // console.log("home constructor under control")
  }
  ngOnInit():void{
    this.userHomeLst =this._userSvc.users;
      console.log("lol ngonint")
  }
product:number =1000;
userName:string="ayla wa manar"
mainStyle:string ="color:red; background-color:gray";
secondStyle:string ="color:gray; background-color:red";
}
