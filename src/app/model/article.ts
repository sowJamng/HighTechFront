import { Souscategorie } from './souscategorie';
export interface Article {
  libelle:string;
  marque:string;
  prix:number;
  description:string;
  photo:string;
souscategorie:Souscategorie;

}
