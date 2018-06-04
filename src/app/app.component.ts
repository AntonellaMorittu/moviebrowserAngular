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
  movieId = sessionStorage.getItem('movieId');

  constructor(private searchService: SearchService, private http: Http) {
    this.searchService.search(this.searchMovie)
    .subscribe(results => {
      this.resultsObject = results.Search;
    });
  }

}
