import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'card';
   article:Article

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }


  voteUp() : Boolean {
    this.article.votes += 1;
    return false;
  }

  voteDown() :Boolean {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {}

}
