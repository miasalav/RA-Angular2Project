import { iColonists } from './iColonists';
import { Colonist } from './Colonist';

export class Colonists implements iColonists {
    colonists:Colonist[];

    constructor(allNewColonists:Colonist[]){
        this.colonists  = allNewColonists;
     //   return this.allColonists as Colonist[];
     return this;

    }
}