import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-device-accessory-details',
    templateUrl: 'device-accessory-details.component.html',
    styleUrls: ['device-accessory-details.component.scss']
})

export class DeviceAccessoryDetailsComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello device-accessory-details');
  }

}
