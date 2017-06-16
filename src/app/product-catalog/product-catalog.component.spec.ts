import { TestBed } from '@angular/core/testing';

import { ProductCatalogComponent } from './product-catalog.component';

describe('product-catalog Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductCatalogComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(ProductCatalogComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('product-catalog Works!');
    });

});
