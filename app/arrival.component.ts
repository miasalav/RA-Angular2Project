import { Component, OnInit } from '@angular/core';
import { JobService } from './job-service';
import { Jobs } from './Jobs';
import { Job } from './Job';
import { Colonist } from './Colonist';
import { ColonistService } from './colonist-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'arrival',
    templateUrl: './app/arrival.component.html',
    styleUrls: ['./app/arrival.component.scss'],
    providers: [JobService, ColonistService],


})

export class ArrivalComponent implements OnInit{
    allJobs:Job[];
    colonist: Colonist;
    null: any;
    job: Job; 
    jobs: Jobs;
    public NO_JOB_SELECTED = '(none)'
    colonistToSubmit: Object;

    get noOccupation() {
        return this.colonist.job.name === this.NO_JOB_SELECTED;
    }

    constructor(private router: Router, private jobService: JobService , private colonistService: ColonistService ) {
        
        this.job = new Job(this.null, '', '');
        this.colonist = new Colonist(this.null, this.null, ''); 

        jobService.getJobs().then(j => this.jobs = j);
        
    }

        onSubmit(){
        /*    this.colonistToSubmit = {};
            this.colonistToSubmit.name = this.colonist.name;
            this.colonistToSubmit.age = this.colonist.age;
            this.colonistToSubmit.job = this.colonist.job.id; */
         
            this.colonist.job_id = this.colonist.job.id.toString();
            
            console.log(this.colonist);

            this.colonistService.newColonist(this.colonist).then(colonist => {
            this.router.navigate(['/encounters']);
           })

            
            .catch(error => {
            // TODO: Handle error

            });           

    }

    

      //  this.jobs = jobService.getJobs();
         

    ngOnInit(): void {
      //  this.jobService.getJobs()
     this.jobService.getJobs().then( (j) => { this.allJobs = j.jobs ; console.log(this.allJobs)} );      
    }

    
}