import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterWordCloudComponent } from './twitter-word-cloud.component';
import { Observable, of } from 'rxjs';
import { TwitterWordCloudService } from './../services/twitter-word-cloud.service';

describe('TwitterWordCloudComponent', () => {
  let component: TwitterWordCloudComponent;
  let fixture: ComponentFixture<TwitterWordCloudComponent>;
  const getWordsListSuccessMock = {
    getWordsList(): Observable<any> {
      return of([{
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'vale3',
        name: 'MSDhoni',
        weight: 54764576
      }]);
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterWordCloudComponent],
      providers: [{
        provide: TwitterWordCloudService,
        useValue: getWordsListSuccessMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterWordCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger getWordList method spy ', () => {
    const getWordsListSpy = spyOn(
      component,
      'getWordsList'
    ).and.callThrough();
    component.getWordsList();
    expect(getWordsListSpy).toHaveBeenCalled();
  });

  it('should trigger getWordList method and validate ', () => {
    component.wordList = [];
    component.getWordsList();
    expect(Object.keys(component.wordList.length)).toBeGreaterThanOrEqual(1);
  });

  it('should call draw chart', () => {
    // ideally we should externalize mock using mock service
    const chartConfigData = [{ name: 'Dhoni', weight: 8787587 }, { name: 'PK', weight: 70900 }];
    component.wordList = chartConfigData;
    spyOn(component, 'drawChart').and.callThrough();
    expect(component.wordList).toBeTruthy();
  });

  it('should call ngOnChanges', () => {
    const chartConfigData = [{ name: 'Dhoni', weight: 8787587 }, { name: 'PK', weight: 70900 }];
    component.wordList = chartConfigData;
    expect(component.wordList).toBeTruthy();
    spyOn(component, 'ngOnChanges').and.callThrough();
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
    component.drawChart(chartConfigData);
  });

});
