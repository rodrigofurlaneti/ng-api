import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: '../component/news.component.html',
  styleUrls: ['../component/news.component.css']
})
export class NewsComponent implements OnInit {

  news: Array<any> = new Array(); 

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.listNews();
  }

  listNews(){
    this.newsService.listNews().subscribe(news => {
      this.news = news.articles;
    }, err => {
      console.log('Erro ao listar as notícias', err);
    })
  }
}