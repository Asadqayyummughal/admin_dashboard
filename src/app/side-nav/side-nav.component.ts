import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public openHambuger:any;
  public closeHamburger:any;
  public navbar:any;
  constructor() { 
  }

  ngOnInit(): void {
    this.initVariables();
  }
  initVariables(){
    this.openHambuger=document.querySelector('.open');
    this.closeHamburger=document.querySelector('.close');
    this.navbar=document.querySelector('.nav');
  }
  showNav(){
    this.openHambuger.style.display="none";
    this.closeHamburger.style.display="block"
    this.navbar.style.display="block"
  }
  closeNave(){
    this.closeHamburger.style.display='none'
    this.navbar.style.display='none';
    this.openHambuger.style.display='block';
    
  }

}
