import { TestBed } from '@angular/core/testing';

import { ExternalCreditCheckComponent } from './external-credit-check.component';

describe('external-credit-check Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExternalCreditCheckComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(ExternalCreditCheckComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('external-credit-check Works!');
    });

});
