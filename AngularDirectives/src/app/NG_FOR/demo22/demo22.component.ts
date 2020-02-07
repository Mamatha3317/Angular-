import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo22',
  templateUrl: './demo22.component.html',
  styleUrls: ['./demo22.component.css']
})
export class Demo22Component implements OnInit {
list:Student[];
sid:number;
sname:string;
age:number;
std:string;
item:Student;
stds:string[]=["I","II","III","IV"];
val:boolean=true;
  constructor() { 
    this.list=[
      {sid:1,sname:'Manu',std:'II',age:22},
      {sid:2,sname:'Kiran',std:'II',age:26},
      {sid:3,sname:'Sunny',std:'II',age:28},
      {sid:4,sname:'Bujja',std:'II',age:23},
      {sid:5,sname:'Ramya',std:'II',age:24}
    ]
  }

  ngOnInit() {
  }
 public Add()
 {
   this.item=new Student();
   this.item.sid=this.sid;
   this.item.sname=this.sname;
   this.item.std=this.std;
   this.item.age=this.age;
   this.list.push(this.item);
 } 
 public Remove()
 {
   this.list.pop();
 }
 public SetVal()
 {
   this.val=!this.val;
 }
}
