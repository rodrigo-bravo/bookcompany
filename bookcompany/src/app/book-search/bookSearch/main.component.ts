import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mainSearch',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class mainSearchComponent implements OnInit {
  reviews: any;
  firstName: String =  '';
  lastName: String = '';

  constructor(public fb: FormBuilder, private http: HttpClient) { }
  onSearch() {
    let x = this.firstName.split(" ");
    this.firstName= x[0];
    this.lastName= x[1];
    const reviewPath = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=' + this.firstName + '+' + this.lastName + '&api-key={NYTIMES_API_KEY_HERE}';
    this.reviews= this.http.get<any>(reviewPath)
    .pipe(
        map(data => data.results)
       )     
  }

  ngOnInit() {

  }
  
}


