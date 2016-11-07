import { Injectable } from '@angular/core';
import { Headers, Http}      from '@angular/http';
import { Job } from './Job';
import { Jobs } from './Jobs';

//import { JOBS } from './mock-jobs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private jobsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';  // URL to web api
  response: Jobs;

  constructor(private http:Http){}     
        
            getJobs(): Promise<Jobs> {
            //console.log(">>friend.service.ts:constructor--")
         //   http.request('./data/jobs.json')
                  //  .subscribe(response => this.jobs = jobs.json()));
             let x = this.http.get(this.jobsUrl).toPromise().then(
                 response => response = response.json()).catch(this.handleError);  
             return x;

             

           /*   return this.http.get(this.jobsUrl)
               .toPromise()
               .then(response => response.json().data as Job[])
               .catch(this.handleError);
        */    
        }
    

        private handleError(error: any): Promise<any> {
            console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }

  }
