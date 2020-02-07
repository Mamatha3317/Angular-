import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';

@Component({
  selector: 'app-project-demo',
  templateUrl: './project-demo.component.html',
  styleUrls: ['./project-demo.component.css']
})
export class ProjectDemoComponent implements OnInit {
list:Project[];
pid:number;
pname:string;
domain:string;
startdate:Date;
enddate:Date;
item:Project;

  constructor() {
    this.list=[];
   }

  ngOnInit() {
  }
  public Add()
  {
    this.item=new Project();
    this.item.pid=this.pid;
    this.item.pname=this.pname;
    this.item.domain=this.domain;
    this.item.startdate=this.startdate;
    this.item.enddate=this.enddate;
    this.list.push(this.item);
  }

}
