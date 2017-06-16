
import { Items } from './items';

export class Cart {

    constructor(public cartID: String,
                public customerID: String,
                public total: String,
                public tax: String,
                public items: Items[]) {}

}
