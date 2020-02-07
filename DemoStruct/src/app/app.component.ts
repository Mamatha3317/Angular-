import { Component } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoStruct';
  Customer:any[]=[{"name":"Manu","country":"India","age":23},
  {"name":"Sunny","country":"India","age":22},
  {"name":"Sam","country":"US","age":25}];

  StudentbyCountry:any[]=[
    {"country":"India","student":[{"name":"Kiru","age":23},{"name":"Buddi","age":26}] },
  {"country":"US","student":[{"name":"Kipapu","age":25},{"name":"Manu","age":22}] },
  ]}

