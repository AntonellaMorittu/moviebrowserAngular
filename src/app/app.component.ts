import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { InfoComponent } from './info/info.component';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})

export class AppComponent {
  title = 'Movie Browser';
  resultsObject: Object;
  movie: Object;
  searchMovie = new Subject<string>();
  baseUrl: string = 'http://www.omdbapi.com/?';
  apiKeyUrlId: string = '&apikey=e0980c6&i=';
  movieId = sessionStorage.getItem('movieId');

  constructor(private searchService: SearchService, private http: Http) {
    this.searchService.search(this.searchMovie)
    .subscribe(results => {
      this.resultsObject = results.Search;
    });
  }

  movieSelected(id){
    // sessionStorage.setItem('movieId', id);
    this.getMovie(id).subscribe(movie => {
      this.movie = movie;
      console.log(movie);
    });
    return false;  // window.location = 'info/:{{id}}';
  }

  getMovie(id){
    return this.http
      .get(this.baseUrl + this.apiKeyUrlId + id + '&plot=full')
      .map(res => res.json());
  }
