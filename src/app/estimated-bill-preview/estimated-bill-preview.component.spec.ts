import { TestBed } from '@angular/core/testing';

import { EstimatedBillPreviewComponent } from './estimated-bill-preview.component';

describe('estimated-bill-preview Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EstimatedBillPreviewComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(EstimatedBillPreviewComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('estimated-bill-preview Works!');
    });

});
