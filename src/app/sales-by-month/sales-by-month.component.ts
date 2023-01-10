import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css']
})
export class SalesByMonthComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Month Wise Sales'
    },
    xAxis:{
      categories:[
        'jan','feb','march',
        "april",'may','june',
        'july','aug','sep',
        'oct','nov','dec'
      ]
    },
    yAxis:{
      title:{
        text:'revenue in $'
      }
    },
    series: [
      {
        name: 'Arizona',
        type:"line",
        color:"#ffbf00",
        data: [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
      },
      {
        name: 'Ohio',
        type:"line",
        color:"#bf00ff",
        data: [10,11,12,13,14,151, 2, 3,4,5,6,7,8,9]
      },
      {
        name: 'Bagh',
        type:"line",
        color:"	#40ff00",
        data: [6,7,8,9,10,11,1, 2, 3,4,5,12,13,14,15]
      }
    ],
    credits:{
      enabled:false
    }
  });

  constructor() { }

  ngOnInit(): void {
  }

}
