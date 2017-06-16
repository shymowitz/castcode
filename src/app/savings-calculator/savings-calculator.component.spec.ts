import { TestBed } from '@angular/core/testing';

import { SavingsCalculatorComponent } from './savings-calculator.component';

describe('savings-calculator Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SavingsCalculatorComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(SavingsCalculatorComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('savings-calculator Works!');
    });

});
