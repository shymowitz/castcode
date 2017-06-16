import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-product-catalog',
    templateUrl: 'product-catalog.component.html',
    styleUrls: ['product-catalog.component.scss']
})

export class ProductCatalogComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello product-catalog');
  }

}
