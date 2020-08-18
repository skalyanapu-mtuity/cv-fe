import { BrowserModule } from '@angular/platform-browser';
import { AppRouitngModule } from './modules/app-rouitng.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomePageComponent} from './modules/home-page/components/home-page-component/home-page.component';
import {TwitterStreamModule} from './modules/twitter-stream/twitter-stream.module';
import {TwitterWordCloudModule} from './modules/twitter-word-cloud/twitter-word-cloud.module';
import { SocketHandlerService } from './socket-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRouitngModule,
    TwitterStreamModule,
    TwitterWordCloudModule
  ],
  providers: [SocketHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
