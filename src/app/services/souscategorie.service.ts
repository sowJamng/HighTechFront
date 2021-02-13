import { Souscategorie } from './../model/souscategorie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {
  categorie:Souscategorie[]=[{id:1, nom:"PC Portable"},{id:2, nom:"PC de Bureau" },
  {id:3,nom:"Accessoires ordinateurs " },{id:4,nom:"Smart phone"},{id:5,nom:"Tel Fixe"},
  {id:6,nom:"Accessoires téléphone"},{id:7,nom:"Clé USB"},{id:8,nom:"Disque dur"}
]

  constructor() { }
}
