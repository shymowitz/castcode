import { TestBed } from '@angular/core/testing';

import { CheckoutShippingComponent } from './checkout-shipping.component';

describe('checkout-shipping Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CheckoutShippingComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(CheckoutShippingComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('checkout-shipping Works!');
    });

});
