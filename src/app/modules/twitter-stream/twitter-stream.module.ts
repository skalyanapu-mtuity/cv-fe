import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterStreamRoutingModule } from './twitter-stream-routing.module';
import {TwitterStreamComponent} from './components/twitter-stream-component/twitter-stream.component';
import {CardViewComponent} from './../../shared/card-view/card-view.component';
@NgModule({
  declarations: [TwitterStreamComponent, CardViewComponent],
  imports: [
    CommonModule,
    TwitterStreamRoutingModule
  ]
})
export class TwitterStreamModule { }
