import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
name:string="Manu";
class:string="II";
age:number=22;
  constructor() { }

  ngOnInit() {
  }

}
