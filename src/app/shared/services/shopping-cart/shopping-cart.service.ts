
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Cart } from './shopping-cart';
import { Items } from './items';
// import { CARTDATA } from './shopping-cart-data';

@Injectable()
export class ShoppingCartDataService {

    private cartUrl = 'http://localhost:3000/device';  // URL to web api
    private mockAPI = false;
    private carts: Cart[] = [];

    constructor(private http: Http) { }

    getCartData(cartID: String): Promise<Cart> {
        if (this.mockAPI) {
            return this.http.get(`${this.cartUrl}/?cartID=${cartID}`)
                .toPromise()
                .then(response => response.json() as Cart)
                .catch(this.handleError);
        } else {
            return Promise.resolve(this.findCartByID(cartID));
        }
    }

    addItem(cartID: String, newItem: Items): boolean {
        let thisCart: Cart;
        thisCart = this.findCartByID(cartID);
        if (thisCart == null) { return false; }
        thisCart.items.push(newItem);
        return true;
    }

    createCart(cartID: String): boolean {
        let cart: Cart;
        let items: Items[] = [];
        cart = {
            cartID: `${cartID}`,
            customerID: '12345678',
            total: '699.99',
            tax: '.06',
            items: items
        };
        this.carts.push(cart);
        return true;
    }

    findCartByID(cartID: String): Cart {
        for (let cart of this.carts) {
            if (cart.cartID = cartID) {
                return cart;
            }
        }
        return null;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred in the ShopingCartDataService:' + error);
        return Promise.reject(error.message || error);
    }

}
