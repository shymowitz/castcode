import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-external-credit-check',
    templateUrl: 'external-credit-check.component.html',
    styleUrls: ['external-credit-check.component.scss']
})

export class ExternalCreditCheckComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello external-credit-check');
  }

}
