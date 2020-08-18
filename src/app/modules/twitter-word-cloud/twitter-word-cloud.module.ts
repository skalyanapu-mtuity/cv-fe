import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TwitterWordCloudRoutingModule } from './twitter-word-cloud-routing.module';
import {TwitterWordCloudComponent} from './components/twitter-word-cloud.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    TwitterWordCloudRoutingModule,
    ChartModule,
    HttpClientModule
  ],
  declarations: [TwitterWordCloudComponent]
})
export class TwitterWordCloudModule { }
