import { TestBed } from '@angular/core/testing';

import { CustomerInformationCaptureComponent } from './customer-information-capture.component';

describe('customer-information-capture Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CustomerInformationCaptureComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(CustomerInformationCaptureComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('customer-information-capture Works!');
    });

});
