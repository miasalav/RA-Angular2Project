import { Component, OnInit } from '@angular/core';
import { ColonistService } from './colonist-service';
import { Colonists } from './Colonists';
import { Colonist } from './Colonist';
import { EncounterService } from './encounters-service';
import { Encounters } from './Encounters';
import { Encounter } from './Encounter';
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'encounters',
    templateUrl: './app/encounters.component.html',
    styleUrls: ['./app/encounters.component.scss'],
    providers: [EncounterService]

})

export class EncountersComponent implements OnInit{

    allEncounters:Encounter[];

    constructor(private encounterService: EncounterService){}

    ngOnInit(): void {
      //  this.jobService.getJobs()
     this.encounterService.getEncounters().then( (j) => { this.allEncounters = j.encounters ; console.log(this.allEncounters)} );

    }

}