import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-new-port-in-number',
    templateUrl: 'new-port-in-number.component.html',
    styleUrls: ['new-port-in-number.component.scss']
})

export class NewPortInNumberComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello new-port-in-number');
  }

}
