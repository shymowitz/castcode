import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-notification-op-in',
    templateUrl: 'notification-op-in.component.html',
    styleUrls: ['notification-op-in.component.scss']
})

export class NotificationOpInComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello notification-op-in');
  }

}
