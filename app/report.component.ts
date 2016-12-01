import { Component, OnInit } from '@angular/core';
import { AlienService } from './alien-service';
import { Aliens } from './Aliens';
import { Alien } from './Alien';

import { EncounterService } from './encounters-service';
import { Encounters } from './Encounters';
import { Encounter } from './Encounter';
import { Colonist } from './Colonist';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'report',
    templateUrl: './app/report.component.html',
    styleUrls: ['./app/report.component.scss'],
    providers: [AlienService, EncounterService]

})

export class ReportComponent implements OnInit{
    allAliens:Alien[];
    alien: Alien;
    null: any;
    encounter: Encounter;
    encounters: Encounters;
    public NO_ALIEN_SELECTED = '(none)';
    encounterToSubmit: Object;


    constructor(private alienService: AlienService, private encounterService: EncounterService, private router: Router) {}

      //  this.jobs = jobService.getJobs();
         

    ngOnInit(): void {
      //  this.jobService.getJobs()

       this.encounter = new Encounter('', '', '', '');    
       this.alienService.getAliens().then( (j) => { this.allAliens = j.aliens ; console.log(this.allAliens)} );       
    }

    onSubmit(){
            let date = new Date();
            let monthNames = [
                "01", "02", "03",
                "04", "05", "06", "07",
                "08", "09", "10",
                "11", "12"
                ];
            let day = date.getDate();
            let monthIndex = date.getMonth();
            let year = date.getFullYear();


            console.log(year + '-' +monthNames[monthIndex] + '-' + day);
       
           this.encounterToSubmit = {};
           this.encounter.colonist_id = '1';
           this.encounter.date = (year + '-' +monthNames[monthIndex] + '-' + day).toString();
           this.encounter.atype = this.encounter.atype;
           this.encounter.action = this.encounter.action;
        // this.encounterToSubmit.job = this.colonist.job.id; */
         
           // this.encounter.colonist_id = this.encounter.colonist.id.toString();            
            console.log(this.encounter);

            this.encounterService.newEncounter(this.encounter).then(encounter => {
            this.router.navigate(['/encounters']);
           }) 

      }
}