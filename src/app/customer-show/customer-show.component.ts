import { Component, OnInit, Input } from '@angular/core';
import { Mock } from '../shared/mocks/mock';

@Component({
    selector: 'my-customer-show',
    templateUrl: 'customer-show.component.html',
    styleUrls: ['customer-show.component.scss']
})

export class CustomerShowComponent implements OnInit {
    @Input()
    customer: Mock;

    constructor() {
    }

    ngOnInit() {
    }

}
