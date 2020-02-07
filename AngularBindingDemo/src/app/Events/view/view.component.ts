import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  sume:number;
  sube:number;
  constructor() { }

  ngOnInit() 
  {
  }
  public adde(num1:number,num2:number)
  {
    this.sume=Number(num1)+Number(num2);
    }
  public subb(num1:number,num2:number)
  {
    this.sube=Number(num1)-Number(num2);
  }


}
