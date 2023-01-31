import { Product } from '../productManagement/Product';
/**
 * @description Promotion, abstract/ base class. Promotion Management B/C.
 */
export declare abstract class Promotion {
    protected qualifyingProducts: Array<string>;
    protected discount: number;
    qualifyingProductCount: number;
    allowMultiplesOfSameProduct: boolean;
    /**
     * @description Check product qualifies for discount
     * @param {Product} product
     */
    isQualifyingProduct(product: Product): boolean;
    /**
     * @description Get Promotion-qualifying Products from supplied basket items
     * @param {Array<Product>} items
     * @param {string} currency
     * @returns {Array<Product>}
     */
    getQualifiedProducts(items: Array<Product>, currency: string): Array<Product>;
    /**
     * @description Calculate discount on array of products
     * @param {Array<Product>} qualifiedProducts
     * @param {string} currency
     * @returns {number} discount value agaist qualifying products
     */
    calculateDiscount(qualifiedProducts: Array<Product>, currency: string): number;
    /**
     * @description Apply discount to given items
     * @param {Array<Product>} items
     * @returns {number} discount value agaist qualified products
     */
    applyDiscount(items: Array<Product>, currency: string): number;
}
