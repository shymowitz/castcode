import { Component, OnInit, Input } from '@angular/core';
import { Mock } from '../shared/mocks/mock';

@Component({
    selector: 'my-customer-lines',
    templateUrl: 'customer-lines.component.html',
    styleUrls: ['customer-lines.component.scss']
})

export class CustomerLinesComponent implements OnInit {
  @Input()
  customer: Mock;

  constructor() {
    // Do stuff

    // let table:HtmlTableElement = <HtmlTableElement>document.getelementById("ltable");

    }
  ngOnInit() {
    console.log('Hello customer-data');
  }


}
