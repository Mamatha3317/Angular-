import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './Events/view/view.component';
import { Demo1Component } from './Twoway-Binding/demo1/demo1.component';
import { Demo2Component } from './twowaybinding/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [  Demo2Component,Demo1Component,ViewComponent
  ]
})
export class AppModule { }
