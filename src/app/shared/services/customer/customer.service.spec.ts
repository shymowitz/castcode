
import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Customer } from './customer';
import { CustomerDataService } from './customer.service';

describe('CustomerDataServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CustomerDataService
            ],
            imports: [
                HttpModule
            ]
        });

    });

    it('#CustomerDataService should be defined', inject([CustomerDataService], (service: CustomerDataService) => {
        expect(service).toBeDefined();
    }));

    it('#getCustomerData should return objects after creation', inject([CustomerDataService], (service: CustomerDataService) => {
        service.getCustomerData().then(data => expect(data).toBeDefined());
    }));

    it('#getAsync should return objects after creation', inject([CustomerDataService], (service: CustomerDataService) => {
        service.getAsync<Customer>().then(data => expect(data).toBeDefined());
    }));

    it('#getCustomerData should return 3 objects', inject([CustomerDataService], (service: CustomerDataService) => {
        service.getCustomerData().then(data => {
            expect(data.length).toEqual(3);
        });
    }));

    it('#getAsync should return 3 objects', inject([CustomerDataService], (service: CustomerDataService) => {
        service.getAsync<Customer>().then(data => {
                expect(data.length).toEqual(3);
        });
    }));

});
