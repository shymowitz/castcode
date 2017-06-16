import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-checkout-billing',
    templateUrl: 'checkout-billing.component.html',
    styleUrls: ['checkout-billing.component.scss']
})

export class CheckoutBillingComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello checkout-billing');
  }

}
