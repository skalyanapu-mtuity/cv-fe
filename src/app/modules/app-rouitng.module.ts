import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './../modules/home-page/components/home-page-component/home-page.component';
const routes: Routes = [
  { path : '', component : HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouitngModule { }
