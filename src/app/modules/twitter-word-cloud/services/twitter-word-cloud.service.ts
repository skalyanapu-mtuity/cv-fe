import { Injectable } from '@angular/core';
import { RestApiService } from '../../../core/http/rest-api.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TwitterWordCloudService {

  constructor(
    public apiService: RestApiService
  ) { }
  /**
   *
   * @param options Route Options
   */
  getWordCloudList(): Observable<any> {
    // ideally, we should fetch the below routes based on ENV variables to avoid fixed values
    const getNewsListURL = 'http://localhost:3001/twitter/words';
    return this.apiService.get(getNewsListURL);
  }
}
