import { Injectable } from '@angular/core';
import { Headers, Http}  from '@angular/http';
import { Colonist } from './Colonist';
import { Colonists } from './Colonists';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ColonistService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private colonistUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';  // URL to web api
  response: Colonists;

  constructor(private http:Http){}     
        
            getColonists(): Promise<Colonists> {
            //console.log(">>friend.service.ts:constructor--")
         //   http.request('./data/jobs.json')
                  //  .subscribe(response => this.jobs = jobs.json()));
             let x = this.http.get(this.colonistUrl).toPromise().then(
                 response => response = response.json()).catch(this.handleError);  
             return x;

            }
    
            newColonist(colonist: Colonist): Promise<Colonist> {
                let headers = new Headers({'Content-Type': 'application/json'});
                let body = JSON.stringify({ colonist });

                return this.http
                    .post(this.colonistUrl, body, { headers: headers })
                    .toPromise()
                    .then(response => response.json().colonist)
                    .catch(this.handleError);
            } 

        private handleError(error: any): Promise<any> {
            console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }

  }
