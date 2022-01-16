import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],

})

export class ArticleComponent implements OnInit {
  article: Article = {
    title: "1213",
    url: "123"
  };
  articles: Article[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }

  findById(): any {
    for (let i = 0; i < this.articles.length; i++) {
      if (this.article === i) {
        return i
      }
      return -1
    }
  }

  delete(): any {
    let index = this.findById()
    this.articles.splice(index)
  }
}

