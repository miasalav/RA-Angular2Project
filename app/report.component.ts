import { Component, OnInit } from '@angular/core';
import { AlienService } from './alien-service';
import { Aliens } from './Aliens';
import { Alien } from './Alien';
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'report',
    templateUrl: './app/report.component.html',
    styleUrls: ['./app/report.component.css'],
    providers: [AlienService]

})

export class ReportComponent implements OnInit{
    allAliens:Alien[];

    constructor(private alienService: AlienService) {}

      //  this.jobs = jobService.getJobs();
         

    ngOnInit(): void {
      //  this.jobService.getJobs()
     this.alienService.getAliens().then( (j) => { this.allAliens = j.aliens ; console.log(this.allAliens)} ); 

      
    }

    
}