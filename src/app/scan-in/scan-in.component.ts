import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-scan-in',
    templateUrl: 'scan-in.component.html',
    styleUrls: ['scan-in.component.scss']
})

export class ScanInComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello scan-in');
  }

}
