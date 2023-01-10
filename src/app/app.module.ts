import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { MainComponent } from './main/main.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCatagoryComponent } from './sales-by-catagory/sales-by-catagory.component';
import { LastFewTransactionComponent } from './last-few-transaction/last-few-transaction.component';
import { TopThreeProductesComponent } from './top-three-productes/top-three-productes.component';
import { ChartModule } from 'angular-highcharts';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    MainComponent,
    SalesByMonthComponent,
    SalesByCatagoryComponent,
    LastFewTransactionComponent,
    TopThreeProductesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
