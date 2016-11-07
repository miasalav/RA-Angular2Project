import { iEncounters } from './iEncounters';
import { iEncounter } from './iEncounter';

export class Encounter implements iEncounter{
    id: number;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;

    constructor(newId:number, newDate:string, newColonist_id:number, newAtype:string, newAction: string){
        this.id = newId;
        this.date = newDate;
        this.colonist_id = newColonist_id;
        this.atype = newAtype;
        this.action = newAction;
        return this;
    }

}