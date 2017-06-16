
import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
// import { Cart } from './shopping-cart';
import { Items } from './items';
import { ShoppingCartDataService } from './shopping-cart.service';

describe('ShoppingCartDataServiceTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ShoppingCartDataService
            ],
            imports: [
                HttpModule
            ]
        });

    });

    it('#DeviceDataService should be defined', inject([ShoppingCartDataService], (service: ShoppingCartDataService) => {
        expect(service).toBeDefined();
    }));

    it('#createCart should return true', inject([ShoppingCartDataService], (service: ShoppingCartDataService) => {
        expect(service.createCart('123')).toEqual(true);
    }));

    it('#addItem should return true', inject([ShoppingCartDataService], (service: ShoppingCartDataService) => {
        service.createCart('123');
        let newItem: Items;
        newItem = {
            name: 'test',
            description: 'test',
            cost: '9.99'
        };
        expect(service.addItem('123', newItem)).toEqual(true);
    }));

    it('#getCartData should return 1 object', inject([ShoppingCartDataService], (service: ShoppingCartDataService) => {
        service.createCart('123');
        service.getCartData('123').then(data => {
                expect(data.cartID).toEqual('123');
        });
    }));

});
