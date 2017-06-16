import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-cart-checkout',
    templateUrl: 'cart-checkout.component.html',
    styleUrls: ['cart-checkout.component.scss']
})

export class CartCheckoutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello cart-checkout');
  }

}
