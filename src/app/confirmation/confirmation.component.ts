import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-confirmation',
    templateUrl: 'confirmation.component.html',
    styleUrls: ['confirmation.component.scss']
})

export class ConfirmationComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello confirmation');
  }

}
