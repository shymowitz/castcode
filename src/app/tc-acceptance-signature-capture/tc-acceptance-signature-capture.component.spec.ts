import { TestBed } from '@angular/core/testing';

import { TcAcceptanceSignatureCaptureComponent } from './tc-acceptance-signature-capture.component';

describe('tc-acceptance-signature-capture Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TcAcceptanceSignatureCaptureComponent]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(TcAcceptanceSignatureCaptureComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('tc-acceptance-signature-capture Works!');
    });

});
