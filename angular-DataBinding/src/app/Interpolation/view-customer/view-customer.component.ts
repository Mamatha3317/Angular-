import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
 obj:Customer;
  constructor() { 
    this.obj={CName:'Manu',Email:'533mamatha@gmail.com',Mobile:77777,City:'Chennai',Address:'Perungudi'};
  }

  ngOnInit() {
  }

}
