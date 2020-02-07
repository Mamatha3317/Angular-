import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.css']
})
export class Demo11Component implements OnInit {
no:number[]=[12,12,11,31,45]
name:string[]=[
  "Manu","Kiran","Sunny","Bujja"
]
  constructor() { 
    this.name.push("Ramya")
  }

  ngOnInit() {
  }

}
