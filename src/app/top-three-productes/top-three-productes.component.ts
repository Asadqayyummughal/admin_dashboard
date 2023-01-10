import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-top-three-productes',
  templateUrl: './top-three-productes.component.html',
  styleUrls: ['./top-three-productes.component.css']
})
export class TopThreeProductesComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'bar',
      height:'225px'
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis:{
      categories:[
        "lenove think pade",
        "lemon Juice",
        "Axe Deoadrant"
      ]
    },
    yAxis:{
      title:{
        text:''
      }
    },
    series: [
      {
        type:"bar",
        data: [
           {
            name:'lenove think pade',
            y:80,
            color:"#ffbf00"
           },
           {
            name:'lemon Juice',
            y:70,
            color:"#810081"
           },
           {
            name:'Axe Deoadrant',
            y:60,
            color:"	#4000ff"
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
