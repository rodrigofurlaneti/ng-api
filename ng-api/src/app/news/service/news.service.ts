import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  listNews() : Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=f379e5691f5a4fd3b601a6990e0c4a14')
  }
}
