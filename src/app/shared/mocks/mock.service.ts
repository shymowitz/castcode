import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Mock } from './mock';
import { MOCKDATA } from './mock-data';

@Injectable()
export class MockDataService {

  private mocksUrl = 'http://localhost:3000/accounts';  // URL to web api
  private mockAPI = false;

  constructor(private http: Http) { }

  getMockData(): Promise<Mock> {
    if (this.mockAPI) {
      return this.http.get(this.mocksUrl)
          .toPromise()
          .then(response => response.json() as Mock[])
          .catch(this.handleError);
    } else { return Promise.resolve(MOCKDATA); }
  }

  search(term: string): Observable<Mock[]> {
    if (this.mockAPI) {
      return this.http
          .get(`${this.mocksUrl}/?firstName=${term}`)
          .map((r: Response) => r.json() as Mock[]);
    } else {
      let searchMocks: Mock[] = [];
      let index;
      let entry;
      for (index = 0; index < MOCKDATA.length; ++index) {
        entry = MOCKDATA[index];
        if (entry && entry.firstName && entry.firstName.toUpperCase().indexOf(term.toUpperCase()) !== -1) {
          console.log('firstName:' + term);
          searchMocks.push(entry);
        }
      }
      console.log(searchMocks);
      return Observable.of(searchMocks);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred' + error);
    return Promise.reject(error.message || error);
  }

}
