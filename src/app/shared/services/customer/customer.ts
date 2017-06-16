import { Lines } from './lines';

export class Customer {

    constructor(public id: number,
                public firstName: String,
                public lastName: String,
                public addressOne: String,
                public addressTwo: String,
                public city: String,
                public state: String,
                public zip: String,
                public phone: String,
                public lines: Lines[]) {}

}
