import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../auth/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;
  @Output() logout = new EventEmitter<User>();

  private API = 'https://www.googleapis.com/books/v1/volumes';
  books: any=[];

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(query:String) : Observable<any>{
    return this.http
           .get<{ items: any[] }>(`${this.API}?q=${query}`)
           .pipe(map( (response) => {
             this.books = response.items
           }));    
  }


  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
