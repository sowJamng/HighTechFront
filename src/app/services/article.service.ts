import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url="https://localhost:8080/HighTechFront/rest/articles";

  articles:Article[]=[
    { libelle:"Lenovo",marque:"Lenovo",prix:500,description:"Ram 8GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo2.jpg",souscategorie:{id:7,nom:'PC Portable'}},
    { libelle:"Macbook",marque:"Macbook",prix:650,description:"Ram 8GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/mack1.jpg",souscategorie:{id:8,nom:'PC Portable'}},
    { libelle:"Macbook pro",marque:"Macbook pro",prix:750,description:"Ram 16GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/mackpro.jpg",souscategorie:{id:9,nom:'PC Portable'}},
    { libelle:"Hp",marque:"HP",prix:500,description:"Ram 16GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/pc1.jpg",souscategorie:{id:1,nom:'PC Portable'}},
    { libelle:"Hp",marque:"HP",prix:600,description:"Ram 16GB disque 500Gb fr:2.5",photo:"../../../../assets/images/pc/pc2.jpg",souscategorie:{id:2,nom:'PC Portable'}},
    { libelle:"iphone6",marque:"Apple",prix:200,description:"Ram 4GB disque 16Gb fr:2.5",photo:"../../../../assets/images/telephones/iphone6.jpg",souscategorie:{id:3,nom:'Smart Phone'}},
    { libelle:"Ipone6p",marque:"Apple",prix:300,description:"Ram 8GB disque 16Gb ",photo:"../../../../assets/images/telephones/iphone6S.jpg",souscategorie:{id:4,nom:'Smart Phone'}},
    // { libelle:"Iphone8p",marque:"Apple",prix:350,description:"Ram 8GB disque 32Gb ",photo:"../../../../assets/images/telephones/iphone8.jpg",souscategorie:{id:5,nom:'Smart Phone'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}}
    ,{ libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}},
    { libelle:"Lenovo",marque:"Lenovo",prix:440,description:"Ram 8GB disque 200Gb fr:2.5",photo:"../../../../assets/images/pc/lenovo1.jpg",souscategorie:{id:6,nom:'PC Portable'}}

];
  constructor(private http:HttpClient) {

   }

  getAllArticles():Article[]{
    return this.articles;
  }
  addArticle(article:Article):void{
    this.articles.push(article);
  }
  getAricles():Observable<any>{
    //return this.http.get('${this.url}');
    return this.http.get(`${this.url}`);
  }
  // update(article:Article):Article{
  //   a:Article= this.articles.
  // }
  // delete(id:number):void{
  //   a:Article=this.article
  // }
}
