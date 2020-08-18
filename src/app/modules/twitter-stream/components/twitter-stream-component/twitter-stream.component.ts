import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { SocketHandlerService } from './../../../../socket-handler.service';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-twitter-stream',
  templateUrl: './twitter-stream.component.html',
  styleUrls: ['./twitter-stream.component.css']
})
export class TwitterStreamComponent implements OnInit, OnDestroy {
  public tweets: Array<any> = [];
  public tweetSubscription;
  @Output() tweetsOutpt = this.tweets;
  constructor(private socketHandlerService: SocketHandlerService) {
    this.tweetSubscription = this.socketHandlerService.tweetList$.subscribe((data) => {
      if (this.tweets[0] === null) {
        this.tweets.pop();
      }
      if (data) {
        this.tweets = [data].concat(this.tweets.slice(0, 2)); // for demo illustrution purpose limiting the  count to 3
      }
    });
  }
  ngOnInit(): void {
    this.socketHandlerService.initSocketConnection();
  }
  /**
   * Angular Component Lifecycle hook
   * to destroy/free memory on component destruction
   */
  ngOnDestroy(): void {
    if (this.tweetSubscription) {
      this.tweetSubscription.unsubscribe();
    }
  }
}
