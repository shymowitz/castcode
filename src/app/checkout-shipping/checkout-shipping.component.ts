import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-checkout-shipping',
    templateUrl: 'checkout-shipping.component.html',
    styleUrls: ['checkout-shipping.component.scss']
})

export class CheckoutShippingComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello checkout-shipping');
  }

}
