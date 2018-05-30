import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  movies: any[];

  constructor(private http: Http, searchService: SearchService) { }

  ngOnInit() {

  }

}
