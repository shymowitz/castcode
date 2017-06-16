import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-order-review',
    templateUrl: 'order-review.component.html',
    styleUrls: ['order-review.component.scss']
})

export class OrderReviewComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello order-review');
  }

}
