import { iEncounters } from './iEncounters';
import { Encounter } from './Encounter'

export class Encounters implements iEncounters {
    encounters:Encounter[];

    constructor(allNewEncounters:Encounter[]){
        this.encounters = allNewEncounters;
      //  return this.allJobs as Job[];
     //  return this;
    }

}