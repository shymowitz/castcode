import { TestBed } from '@angular/core/testing';

import { DeviceCustomizationComponent } from './device-customization.component';

describe('device-customization Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ DeviceCustomizationComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent( DeviceCustomizationComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('device-customization Works!');
    });

});
