import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [SearchService]
})

export class InfoComponent implements OnInit {
  results: Object;

  constructor(private http: Http, searchService: SearchService) { }

  ngOnInit() {
      this.searchService.search(this.searchMovie$)
      .subscribe(results => {
        console.log(results.Search);
        this.results = results.Search;
      });

  }

}
