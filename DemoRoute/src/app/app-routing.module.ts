import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './myDemo/first-page.component';
import { SecondPageComponent } from './myDemo/second-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [  {path:"secondpage",component:SecondPageComponent},
{path:"firstpage",component:FirstPageComponent},
{path:"",redirectTo:"app-rout",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
