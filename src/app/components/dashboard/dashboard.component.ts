import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {DashboardService, Activity} from '../../providers/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories = [];
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Speed Zones'
    },
    xAxis: {
      categories: this.categories
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'Calle 85',
      data: []

    }, {
      name: 'Salitre plaza',
      data: []

    }, {
      name: 'Parque 93',
      data: []

    }, {
      name: 'Calle 80',
      data: []

    },
      {
        name: 'Centro',
        data: []
      }]
  });

  barChart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Rainfall'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: this.categories,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Calle 85',
      data: []

    }, {
      name: 'Salitre plaza',
      data: []

    }, {
      name: 'Parque 93',
      data: []

    }, {
      name: 'Calle 80',
      data: []

    },
      {
        name: 'Centro',
        data: []
      }]
  });
  // Timer Observable variable
  private subscription: any;
  activities: Activity[];

  constructor(private _dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getDataJson();
    this.subscription = Observable.interval(50000).subscribe(x => {
      console.log('Observable initiated');
      this.getDataJson();
    });
  }

  add(data , index: number) {
    this.chart.addPoint(data.speed, index);
    this.barChart.addPoint(data.count, index);
  }

  formatDate(miliseconds: number) {
    const date = new Date(miliseconds);
    return date.getHours() + ':' + date.getMinutes();
  }

  getDataJson() {
    this._dashboardService.getData().subscribe((data) => {
      this.activities = data;
      const time = this.activities[0].data.time;
      this.categories.push(this.formatDate(time));
      this.activities.forEach( (zone, index) => {
        this.add(zone.data, index);
      });
    });
  }

}
