import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transaction',
  templateUrl: './last-few-transaction.component.html',
  styleUrls: ['./last-few-transaction.component.css']
})
export class LastFewTransactionComponent implements OnInit {
 public transactons=[
  {
    id:'1',
    title:'Razyen 5 processor',
    price:'59$',
    shop:'Pc Planet',
    location:'dubaie Plaza 6th road',
    status:'pending',
    img_src:'../../assets/personwebp.webp'

  },
  {
    id:'2',
    title:'Razyen 5 processor',
    price:'59$',
    shop:'Pc Planet',
    location:'dubaie Plaza 6th road',
    status:'shiped',
    img_src:'../../assets/personwebp.webp'

  },
  {
    id:'3',
    title:'Razyen 5 processor',
    price:'59$',
    shop:'Pc Planet',
    location:'dubaie Plaza 6th road',
    status:'confirmed',
    img_src:'../../assets/personwebp.webp'

  },
    {
      id:'4',
      title:'Razyen 5 processor',
      price:'89$',
      shop:'Pc Planet',
      location:'dubaie Plaza 6th road',
      status:'confirmed',
      img_src:'../../assets/personwebp.webp'
  
    },
    {
      id:'5',
      title:'Razyen 5 processor',
      price:'59$',
      shop:'Pc Planet',
      location:'dubaie Plaza 6th road',
      status:'pending',
      img_src:'../../assets/personwebp.webp'
  
    }
  
 ];
  constructor() { }

  ngOnInit(): void {
  }


}
