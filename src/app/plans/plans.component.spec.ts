import { TestBed } from '@angular/core/testing';

import { PlansComponent } from './plans.component';

describe('plans Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PlansComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(PlansComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('plans Works!');
    });

});
