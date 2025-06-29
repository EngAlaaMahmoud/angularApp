import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestUsersServiceService {

  constructor() { }
  users:user[] =[
    {name:"alaa",age:33,gender:"male"},
    {name:"manar",age:23,gender:"female"},
    {name:"ayla",age:1,gender:"female"},
  ]
}

export interface user {
name:string,
gender:string,
age:number
}