import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() movie: any;

  baseUrl: string = 'http://www.omdbapi.com/?';
  apiKeyUrlId: string = '&apikey=e0980c6&i=';

  constructor(
    private route: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovie(id).subscribe(movie => this.movie = movie);

  }

  getMovie(id){
    return this.http
      .get(this.baseUrl + this.apiKeyUrlId + id + '&plot=full')
      .map(res => res.json());
  }
}
