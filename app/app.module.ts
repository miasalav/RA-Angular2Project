import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }      from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ArrivalComponent } from './arrival.component';
import { EncountersComponent } from './encounters.component';
import { ReportComponent } from './report.component';

@NgModule({
  imports: [ BrowserModule, HttpModule,
  RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full' 
      },
      {
        path: 'arrival',
        component: ArrivalComponent
      },
      {
        path: 'encounters',
        component: EncountersComponent
      },
      {
        path: 'report',
        component: ReportComponent
      }
    ])
     ],
  declarations: [ AppComponent, HomeComponent, ArrivalComponent, EncountersComponent, ReportComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
