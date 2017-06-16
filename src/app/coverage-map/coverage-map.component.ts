import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-coverage-map',
    templateUrl: 'coverage-map.component.html',
    styleUrls: ['coverage-map.component.scss']
})

export class CoverageMapComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello coverage-map');
  }

}
