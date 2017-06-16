import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-customer-information-capture',
    templateUrl: 'customer-information-capture.component.html',
    styleUrls: ['customer-information-capture.component.scss']
})

export class CustomerInformationCaptureComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello customer-information-capture');
  }

}
