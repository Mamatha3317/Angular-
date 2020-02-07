import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
Firstname:string="manu";
Lastname:string="Vempalli";
Age:number=22;
Email:string="533mamatha@gmail.com";
  constructor() { }

  ngOnInit() {
  }

}
