import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-plans',
    templateUrl: 'plans.component.html',
    styleUrls: ['plans.component.scss']
})

export class PlansComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello plans');
  }

}
