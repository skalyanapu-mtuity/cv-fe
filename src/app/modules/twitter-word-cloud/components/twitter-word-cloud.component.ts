import { Component, OnInit, OnChanges } from '@angular/core';
import { TwitterWordCloudService } from './../services/twitter-word-cloud.service';
import WordCloud from 'highcharts/modules/wordcloud';
import * as Highcharts from 'highcharts';
import { HttpErrorResponse } from '@angular/common/http';
WordCloud(Highcharts);

@Component({
  selector: 'app-twitter-word-cloud',
  templateUrl: './twitter-word-cloud.component.html',
  styleUrls: ['./twitter-word-cloud.component.css'],
})
export class TwitterWordCloudComponent implements OnInit , OnChanges {
  public wordList: Array<any> = []; // Ideally we should model interface here, for better type check
  public isAPIError = false;
  constructor(public twitterWordCloudService: TwitterWordCloudService) {}

  ngOnInit(): void {
    this.getWordsList();
  }
  /**
   * This method would fetch the list of
   * cloud words by treggering respective HTTP API
   */
  getWordsList(): void {
    this.twitterWordCloudService.getWordCloudList().subscribe(
      (params) => {
        // transforming the object to match the charting library
        // in put data format
        this.wordList = params.map((obj) =>
          (({ name, weight }) => ({ name, weight }))(obj)
        );
        this.drawChart(this.wordList);
      },
      (error: HttpErrorResponse) => { // ideally we should use logger service here
        this.isAPIError = true;
      }
    );
  }
  /**
   * Renders the SVG of WordCloud with
   * the provided list of words as arg
   * @param wL : List of words
   */
  drawChart(wL): void {
    Highcharts.chart('container', {
      series: [
        {
          type: 'wordcloud',
          data: wL,
          name: 'Occurrences',
        },
      ],
      title: {
        text: 'Twitter Wordcloud',
      },
    });
  }
  /**
   * Life cycle hook to detect component wide
   * changes
   */
  ngOnChanges(): void {
    if (this.wordList.length >= 1 ) {
      this.drawChart(this.wordList);
    }
  }
}
