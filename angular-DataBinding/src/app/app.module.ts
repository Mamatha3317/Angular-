import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Interpolation/demo/demo.component';

import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { View1Component } from './Property-Binding/view1/view1.component';
import { EventDemoComponent } from './Event-Binding/event-demo/event-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
   
    ViewCustomerComponent,
    View1Component,
    EventDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ EventDemoComponent]
})
export class AppModule { }
