import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Customer } from './customer';
import { CUSTOMERDATA } from './customer-data';

@Injectable()
export class CustomerDataService {

    private customerUrl = 'http://localhost:3000/customer';  // URL to web api
    private customerAPI = false;

    constructor(private http: Http) { }

    getCustomerData(): Promise<Customer[]> {
        if (this.customerAPI) {
            return this.http.get(this.customerUrl)
                .toPromise()
                .then(response => response.json() as Customer[])
                .catch(this.handleError);
        } else {
            return Promise.resolve(CUSTOMERDATA);
        }
    }

    getAsync<T extends Customer>(): Promise<T[]> {
        return Promise.resolve(CUSTOMERDATA);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred' + error);
        return Promise.reject(error.message || error);
    }

}
