import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-device-customization',
    templateUrl: 'device-customization.component.html',
    styleUrls: ['device-customization.component.scss']
})

export class DeviceCustomizationComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello device-customization');
  }

}
