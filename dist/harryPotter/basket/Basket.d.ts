import { Product } from '../productManagement/Product';
/**
 * @description Interface for Basket calculatetotal() return
 */
interface BasketTotalReturn {
    listPrice: number;
    discount: number;
    total: number;
    promotions: Array<string>;
}
/**
 * @description Basket Class, represents a shopping cart/ basket. Conext Pattern.
 */
export declare class Basket {
    currency: string;
    items: Array<Product>;
    /**
     * @description Create a new Basket
     * @param {string} currency
     */
    constructor(currency?: string);
    /**
     * @description Add item to basket
     * @param {Product} item
     */
    addItem(item: Product): void;
    /**
     * @description Remove item from basket
     * @param {Product} item
     */
    removeItem(item: Product): void;
    /**
     * @description Returns total payable, after discounts
     * @returns {number}
     */
    calculateTotal(): BasketTotalReturn;
}
export {};
