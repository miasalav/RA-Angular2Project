import { Injectable } from '@angular/core';
import { Headers, Http}      from '@angular/http';
import { Encounter } from './Encounter';
import { Encounters } from './Encounters';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EncounterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private encounterUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';  // URL to web api
  response: Encounters;

  constructor(private http:Http){}     
        
            getEncounters(): Promise<Encounters> {
            //console.log(">>friend.service.ts:constructor--")
         //   http.request('./data/jobs.json')
                  //  .subscribe(response => this.jobs = jobs.json()));
             let x = this.http.get(this.encounterUrl).toPromise().then(
                 response => response = response.json()).catch(this.handleError);  
             return x;

        }
    

        private handleError(error: any): Promise<any> {
            console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }

  }
