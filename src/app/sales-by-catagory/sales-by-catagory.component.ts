import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-sales-by-catagory',
  templateUrl: './sales-by-catagory.component.html',
  styleUrls: ['./sales-by-catagory.component.css']
})
export class SalesByCatagoryComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Catogory Wise Sales'
    },
    xAxis:{
      categories:[
         'Electorincs',
         "Appliances",
         "Cosmetics",
         "Oils",
         "Clothes"
      ]
    },
    yAxis:{
      title:{
        text:'revenue in $'
      }
    },
    series: [
      {
        type:"pie",
        data: [
           {
            name:'Electorincs',
            y:40,
            color:"#ffbf00"
           },
           {
            name:'Appliances',
            y:15,
            color:"#810081"
           },
           {
            name:'Cosmetics',
            y:10.6,
            color:"	#4000ff"
           },
           {
            name:'Oils',
            y:15,
            color:"#00ffbf"
           },
           {
            name:'Clothes',
            y:7,
            color:"#FF00C0"
           }

        ]  
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
