import { Injectable } from '@angular/core';
import { Article } from '../model/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles:Article[]=[

    { libelle:"Hp",marque:"HP",prix:500,description:"Ram 16GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/pc1.jpg"},
    { libelle:"Hp",marque:"HP",prix:600,description:"Ram 16GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/pc2.jpg"},
    { libelle:"iphone6",marque:"Apple",prix:200,description:"Ram 4GB disque 16Gb fr:2.5",photo:"../../../../assets/images/telephones/iphone6.jpg"},
    { libelle:"Ipone6p",marque:"Apple",prix:300,description:"Ram 8GB disque 16Gb ",photo:"../../../../assets/images/telephones/iphone6S.jpg"},
    { libelle:"Iphone8p",marque:"Apple",prix:350,description:"Ram 8GB disque 32Gb ",photo:"../../../../assets/images/telephones/iphone8.jpg"},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg"},
    { libelle:"Lenovo",marque:"Lenovo",prix:500,description:"Ram 8GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo2.jpg"},
    { libelle:"Macbook",marque:"Macbook",prix:650,description:"Ram 8GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/mack1.jpg"},
    { libelle:"Macbook pro",marque:"Macbook pro",prix:750,description:"Ram 16GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/mackpro.jpg"}
];
  constructor() { }

  getAllArticles():Article[]{
    return this.articles;
  }
}
