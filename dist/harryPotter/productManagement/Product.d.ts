/**
 * @descriptionPrice Interace. Product Management B/C.
 */
export interface Price {
    currency: string;
    amount: number;
}
/**
 * @description Product base/ abstract class. Product Management B/C.
 */
export declare abstract class Product {
    id: string;
    price: Array<Price>;
    /**
     * @description Create a new Product
     * @param {Array<price>} price
     * @param {string} id
     */
    constructor(price: Array<Price>, id?: string);
}
