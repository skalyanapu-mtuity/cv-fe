import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterStreamComponent } from './components/twitter-stream-component/twitter-stream.component';

const routes: Routes = [
  { path : 'tweet-stream', component : TwitterStreamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterStreamRoutingModule { }
