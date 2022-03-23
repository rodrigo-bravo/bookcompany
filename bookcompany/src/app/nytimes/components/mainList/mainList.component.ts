import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-mainList',
  templateUrl: './mainList.component.html',
  styleUrls: ['./mainList.component.scss'],
})
export class NytimesUserComponent implements OnInit {
  booksCall;
  reviews: any;

  constructor(http: HttpClient){
  const path ='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key={NYTIMES_API_KEY_HERE}';
  this.booksCall = http.get<any>(path)
  .pipe(
      map(data => data.results.books)
       )
  }

  ngOnInit() {
  }


}
