import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Login } from 'src/app/Model/login';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
obj:Login
invalid:string;

  constructor() {
    this.obj=new Login();

   }

  ngOnInit() {
  }
  public s()
  {
    if(this.obj.username=="Admin" &&this.obj.password=="12345")
    {
      this.invalid="login success";
    }
    else{
      this.invalid="login failed..";
    }
  }


}
