import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input('data') lineChartData: Array<any>;
  @Input('labels') lineChartLabels: Array<any>;
  @Input('showLegend') lineChartLegend: boolean = false;

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    { // blue
      backgroundColor: 'rgba(2,117,216,0.2)',
      borderColor: 'rgba(2,117,216,1)',
      pointBackgroundColor: 'rgba(2,117,216,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(2,117,216,0.8)'
    },
    { // green
      backgroundColor: 'rgba(68,157,68,0.2)',
      borderColor: 'rgba(68,157,68,1)',
      pointBackgroundColor: 'rgba(68,157,68,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(68,157,68,1)'
    },
    { // light blue
      backgroundColor: 'rgba(49,176,213,0.2)',
      borderColor: 'rgba(49,176,213,1)',
      pointBackgroundColor: 'rgba(49,176,213,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(49,176,213,0.8)'
    },
    { // orange
      backgroundColor: 'rgba(236,151,31,0.2)',
      borderColor: 'rgba(236,151,31,1)',
      pointBackgroundColor: 'rgba(236,151,31,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(236,151,31,0.8)'
    },
    { // red
      backgroundColor: 'rgba(201,48,44,0.2)',
      borderColor: 'rgba(201,48,44,1)',
      pointBackgroundColor: 'rgba(201,48,44,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(201,48,44,0.8)'
    }
  ];

  public lineChartType: string = 'line';

  constructor() { }

  // events
  public chartClicked(e: any): void { }

  public chartHovered(e: any): void { }

}
