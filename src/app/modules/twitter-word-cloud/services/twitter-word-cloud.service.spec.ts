import { TestBed } from '@angular/core/testing';

import { TwitterWordCloudService } from './twitter-word-cloud.service';

describe('TwitterWordCloudService', () => {
  let service: TwitterWordCloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterWordCloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
