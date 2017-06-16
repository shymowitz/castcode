import { Component, OnInit, Input } from '@angular/core';
import { Mock } from '../shared/mocks/mock';
import { MockDataService } from '../shared/mocks/mock.service';

@Component({
    selector: 'my-customer-info',
    templateUrl: 'customer-info.component.html',
    styleUrls: ['customer-info.component.scss'],
    providers: [MockDataService]
})

export class CustomerInfoComponent implements OnInit {
  @Input()
  mocks: Mock;

  constructor(private mockDataService: MockDataService) {}

  getMockData(): void {
    this.mockDataService.getMockData().then(mocks => this.mocks = mocks);
  }
  ngOnInit(): void {
    this.getMockData();
  }

}
