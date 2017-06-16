import { TestBed } from '@angular/core/testing';

import { CartCheckoutComponent } from './cart-checkout.component';

describe('cart-checkout Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CartCheckoutComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(CartCheckoutComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('cart-checkout Works!');
    });

});
