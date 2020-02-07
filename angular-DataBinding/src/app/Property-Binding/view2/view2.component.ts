import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
Item:Customer
  constructor() {
this.Item=new  Customer;
this.Item.CName="manu";
this.Item.City="Chennai";
this.Item.Email="533mamatha@gmail.com";
this.Item.Address="Perungudi";
this.Item.Mobile=246456345;
   }
 
  ngOnInit() {
  }

}
