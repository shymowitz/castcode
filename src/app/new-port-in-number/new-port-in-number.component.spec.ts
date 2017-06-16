import { TestBed } from '@angular/core/testing';

import { NewPortInNumberComponent } from './new-port-in-number.component';

describe('new-port-in-number Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewPortInNumberComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(NewPortInNumberComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('new-port-in-number Works!');
    });

});
