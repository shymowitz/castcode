import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Mock } from './mock';
import { MockDataService } from './mock.service';

@Component({
  selector: 'my-mock',
  template: `
    <h1>{{title}}</h1>
      <div id="search-component">
        <h4>Account Search (on first name)</h4>
        <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
        <div>
          <div *ngFor="let mock of mocks | async"
               (click)="gotoDetail(mock)" class="search-result" >
            {{mock.firstName}}  -  {{mock.lastName}}
          </div>
        </div>
      </div>
    `,
    styles: [`
      * {
        color: black;
      }
    `],
  providers: [MockDataService]
})

export class MockDataComponent implements OnInit {
  title = 'Our Mock Data';
  mocks: Observable<Mock[]>;
  private searchTerms = new Subject<string>();

  constructor(private mockDataService: MockDataService,
              private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.mocks = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
            // return the http search observable
            ? this.mockDataService.search(term)
            // or the observable of empty mock objects if no search term
            : Observable.of<Mock[]>([]))
        .catch(error => {
          // TODO: real error handling
          console.log(error);
          return Observable.of<Mock[]>([]);
        });
  }
  gotoDetail(mock: Mock): void {
    let link = ['/detail', mock.toString];
    this.router.navigate(link);
  }

}
