import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = null;
  num:number=10;
  imagepath:string='assets/images/tom.png';
   fname:string="Manu";
   lname:string="M";
   isdisabled:boolean=false;
   name:string="Manu"
   getname():string
   {
    
      return this.fname=this.fname.toUpperCase();
      return this.fname=" "+this.fname;
   }
}
