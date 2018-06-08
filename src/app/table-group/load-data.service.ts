import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  constructor(private httpClient: HttpClient) { }

  getUrlData() {
    const url = 'https://raw.githubusercontent.com/fuadhaider/mock-data/master/test.json';
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    return this.httpClient.get(url);
  }
}
