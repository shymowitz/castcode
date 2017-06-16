import { TestBed } from '@angular/core/testing';

import { NotificationOpInComponent } from './notification-op-in.component';

describe('notification-op-in Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationOpInComponent ]
        });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(NotificationOpInComponent );
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('notification-op-in Works!');
    });

});
