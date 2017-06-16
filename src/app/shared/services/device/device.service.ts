import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Device } from './device';
import { DEVICEDATA } from './device-data';

@Injectable()
export class DeviceDataService {

    private deviceUrl = 'http://localhost:3000/device';  // URL to web api
    private mockAPI = false;

    constructor(private http: Http) { }

    getDeviceData(): Promise<Device[]> {
        if (this.mockAPI) {
            return this.http.get(this.deviceUrl)
                .toPromise()
                .then(response => response.json() as Device[])
                .catch(this.handleError);
        } else {
            return Promise.resolve(DEVICEDATA);
        }
    }

    getAsync<T extends Device>(): Promise<T[]> {
        return Promise.resolve(DEVICEDATA);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in the DeviceDataService:' + error);
        return Promise.reject(error.message || error);
    }

}
