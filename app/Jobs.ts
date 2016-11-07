import { iJobs } from './iJobs';
import { Job } from './Job'

export class Jobs implements iJobs {
    jobs:Job[];

    constructor(newJobs:Job[] = [new Job(0, '', '')]){
        this.jobs = newJobs;
      //  return this.allJobs as Job[];
     //  return this;
    }

}