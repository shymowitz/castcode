import { TestBed } from '@angular/core/testing';

import { ScanInComponent } from './scan-in.component';

describe('scan-in Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ScanInComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(ScanInComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('scan-in Works!');
    });

});
