import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketHandlerService {
  public webSocket;
  private tweetsList: Array<any> = []; // ideally I would define model interface here
  public tweetList$ = new BehaviorSubject(null);
  constructor() { }

  initSocketConnection(): void {
    this.webSocket = io(environment.SOCKET_ENDPOINT, {
      transports: ['websocket']
    });

    this.webSocket.on('connect', (data: string) => {
      console.log('*** connected to server *****'); // only for assignment purpose
    });

    this.webSocket.on('tweet', (data: string) => {
      // this.tweetsList.push(data);
      this.tweetList$.next(data);
    });

    this.webSocket.on('disconnect', () => {
      console.log('*** disconnect connected from server *****'); // only for assignment purpose
    });
  }

  // getTweets(): Array<any>{
  //   this.tweetList$.next(this.tweetsList);
  //   return this.tweetList$
  // }
}
