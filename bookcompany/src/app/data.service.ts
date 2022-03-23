import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://api.nytimes.com/svc/topstories/v2/books.json?api-key={NYTIMES_API_KEY_HERE}";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}