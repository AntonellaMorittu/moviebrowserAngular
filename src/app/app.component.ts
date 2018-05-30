import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})

export class AppComponent {
  title = 'Movie Browser';
  results: Object;
  searchMovie$ = new Subject<string>();


  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchMovie$)
    .subscribe(results => {
      console.log(results.Search);
      this.results = results.Search;
    });
  }

    movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'info.component.html';
    return false;
  }


}
