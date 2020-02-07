import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './Ng-If/demo1/demo1.component';
import { Demo11Component } from './NG-For/demo11/demo11.component';
import { Demo22Component } from './NG_FOR/demo22/demo22.component';
import { ProjectDemoComponent } from './AngularDirectives/project-demo/project-demo.component';
import { Demo33Component } from './NG-SWITCH/demo33/demo33.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo11Component,
    Demo22Component,
    ProjectDemoComponent,
    Demo33Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Demo22Component]
})
export class AppModule { }
