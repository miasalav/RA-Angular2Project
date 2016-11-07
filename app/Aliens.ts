import { iAliens } from './iAliens';
import { Alien } from './Alien'

export class Aliens implements iAliens {
    aliens:Alien[];

    constructor(allNewAliens:Alien[]){
        this.aliens = allNewAliens;
      //  return this.allJobs as Job[];
     //  return this;
    }

}