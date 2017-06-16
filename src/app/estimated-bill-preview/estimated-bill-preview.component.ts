import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-estimated-bill-preview',
    templateUrl: 'estimated-bill-preview.component.html',
    styleUrls: ['estimated-bill-preview.component.scss']
})

export class EstimatedBillPreviewComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello estimated-bill-preview');
  }

}
