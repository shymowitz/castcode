import { TestBed } from '@angular/core/testing';

import { CheckoutBillingComponent } from './checkout-billing.component';

describe('checkout-billing Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CheckoutBillingComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(CheckoutBillingComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('checkout-billing Works!');
    });

});
