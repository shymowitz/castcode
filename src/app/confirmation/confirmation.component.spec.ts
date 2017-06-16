import { TestBed } from '@angular/core/testing';

import { ConfirmationComponent } from './confirmation.component';

describe('confirmation Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmationComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(ConfirmationComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('confirmation Works!');
    });

});
