import { Injectable } from '@angular/core';
import { Headers, Http}      from '@angular/http';
import { Alien } from './Alien';
import { Aliens } from './Aliens';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlienService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private alienUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';  // URL to web api
  response: Colonists;

  constructor(private http:Http){}     
        
            getAliens(): Promise<Aliens> {
             let x = this.http.get(this.alienUrl).toPromise().then(
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
