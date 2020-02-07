import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {
name:string;
  constructor() { }
  public onclick()
  {
    this.name='naga';
  }

  ngOnInit() {
  }
  public Greet(val:any)
  {
    this.name=val;
  }


}
