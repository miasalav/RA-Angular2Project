import { iEncounters } from './iEncounters';
import { iEncounter } from './iEncounter';

export class Encounter implements iEncounter{
    date: string;
    colonist_id: string;
    atype: string;
    action: string;

    constructor(newDate:string, newColonist_id:string = "-1", newAtype:string, newAction: string){
        this.date = newDate;
        this.colonist_id = newColonist_id;
        this.atype = newAtype;
        this.action = newAction;
        return this;
    }

}