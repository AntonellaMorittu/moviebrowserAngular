import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = 'http://www.omdbapi.com/?';
  apiKeyUrl: string = '&apikey=e0980c6&s=';
  apiKeyUrlId: string = '&apikey=e0980c6&i=';


  constructor(private http: Http) { }

  search(movies: Observable<string>) {
    return movies.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(movie => this.searchEntries(movie));
  }

  searchEntries(movie) {
    return this.http
      .get(this.baseUrl + this.apiKeyUrl + movie)
      .map(res => res.json());
  }

  

}
