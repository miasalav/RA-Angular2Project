import { iColonist } from './iColonist';
import { Job } from './Job'

export class Colonist implements iColonist{
    id: number;
    age: number;
    name: string;
    job: Job;

    constructor(newId:number, newAge:number, newName:string, newJob:Job){
        this.id = newId;
        this.age = newAge;
        this.name = newName;
        this.job = newJob;
        return this;
    }

}