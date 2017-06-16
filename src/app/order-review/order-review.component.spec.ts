import { TestBed } from '@angular/core/testing';

import { OrderReviewComponent } from './order-review.component';

describe('order-review Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [OrderReviewComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(OrderReviewComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('order-review Works!');
    });

});
