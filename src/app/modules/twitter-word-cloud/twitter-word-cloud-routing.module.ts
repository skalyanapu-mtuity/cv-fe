import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TwitterWordCloudComponent} from './components/twitter-word-cloud.component';
const routes: Routes = [
  { path : 'word-cloud', component : TwitterWordCloudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterWordCloudRoutingModule { }
