import { Component, OnInit } from '@angular/core';
import { JobService } from './job-service';
import { Jobs } from './Jobs';
import { Job } from './Job';
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'arrival',
    templateUrl: './app/arrival.component.html',
    styleUrls: ['./app/arrival.component.scss'],
    providers: [JobService],


})

export class ArrivalComponent implements OnInit{
    allJobs:Job[];

    constructor(private jobService: JobService) {}

      //  this.jobs = jobService.getJobs();
         

    ngOnInit(): void {
      //  this.jobService.getJobs()
     this.jobService.getJobs().then( (j) => { this.allJobs = j.jobs ; console.log(this.allJobs)} ); 

      
    }

    
}