import { Component, OnInit } from '@angular/core';
import { OpinionPollService } from './../opinion-poll.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css'],
})
export class PollResultsComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [
    'Miguel de Cervantes',
    'Charles Dickens',
    'J.R.R. Tolkien',
    'Antoine de Saint-Exuper',
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Poll Result' },
  ];
  constructor(private service: OpinionPollService) {
    let dataVal = [];

    for (let key in this.service.author) {
      dataVal.push(this.service.author[key]);
    }

    this.barChartData[0].data = dataVal;
  }

  ngOnInit(): void {}
}
