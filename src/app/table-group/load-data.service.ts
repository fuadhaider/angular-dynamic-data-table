import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  constructor(private httpClient: HttpClient) { }

  getUrlData() {
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    const url = 'https://raw.githubusercontent.com/fuadhaider/mock-data/master/test.json';
    return this.httpClient.get(url);
  }

  searchData(term: string) {
    if (!term.trim()) {
      return [];
    }
    else {
      term = term.toLowerCase();
    }
  }
}
