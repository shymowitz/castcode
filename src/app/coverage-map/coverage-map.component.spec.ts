import { TestBed } from '@angular/core/testing';

import { CoverageMapComponent } from './coverage-map.component';

describe('coverage-map Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoverageMapComponent ]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(CoverageMapComponent );
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('coverage-map Works!');
    });

});
