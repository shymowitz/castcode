import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-savings-calculator',
    templateUrl: 'savings-calculator.component.html',
    styleUrls: ['savings-calculator.component.scss']
})

export class SavingsCalculatorComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello savings-calculator');
  }

}
