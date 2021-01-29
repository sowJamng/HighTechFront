import { Component, OnInit } from '@angular/core';
import { Article } from '../../../model/article';
import { ArticleService } from '../../../serives/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
 articles:Article[]=[];

  constructor(private articleservice:ArticleService) {

  }

  ngOnInit(): void {
     this.articles=this.getArticles();
  }

  getArticles():Article[]{
    return this.articleservice.getAllArticles();
  }


}
