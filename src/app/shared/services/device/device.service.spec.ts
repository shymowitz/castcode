
import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Device } from './device';
import { DeviceDataService } from './device.service';

describe('DeviceDataServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DeviceDataService
            ],
            imports: [
                HttpModule
            ]
        });

    });

    it('#DeviceDataService should be defined', inject([DeviceDataService], (service: DeviceDataService) => {
        expect(service).toBeDefined();
    }));

    it('#getDeviceData should return objects after creation', inject([DeviceDataService], (service: DeviceDataService) => {
        service.getDeviceData().then(data => expect(data).toBeDefined());
    }));

    it('#getAsync should return objects after creation', inject([DeviceDataService], (service: DeviceDataService) => {
        service.getAsync<Device>().then(data => expect(data).toBeDefined());
    }));

    it('#getDeviceData should return 2 objects', inject([DeviceDataService], (service: DeviceDataService) => {
        service.getDeviceData().then(data => {
            expect(data.length).toEqual(2);
        });
    }));

    it('#getAsync should return 2 objects', inject([DeviceDataService], (service: DeviceDataService) => {
        service.getAsync<Device>().then(data => {
                expect(data.length).toEqual(2);
        });
    }));

});
