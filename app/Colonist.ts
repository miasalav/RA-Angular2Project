import { iColonist } from './iColonist';
import { Job } from './Job'

export class Colonist implements iColonist{
    id: number;
    age: number;
    name: string;
    job: Job;
    job_id: string;

    constructor(newId:number, newAge:number, newName:string, newJob:Job = new Job(-1, '', ''), newJobId: string = "-1"){
        this.id = newId;
        this.age = newAge;
        this.name = newName;
        this.job = newJob;
        this.job_id = newJobId;
        return this;
    }

}