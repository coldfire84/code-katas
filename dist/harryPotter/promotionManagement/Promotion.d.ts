import { Product } from '../productManagement/Product';
/**
 * @description Promotion, abstract/ base class. Promotion Management B/C.
 */
export declare abstract class Promotion {
    protected discount: number;
    qualifyingProducts: Array<string>;
    qualifyingProductCount: number;
    allowMultiplesOfSameProduct: boolean;
    /**
     * @description Check product qualifies for discount
     * @param {Product} product
     */
    isQualifyingProduct(product: Product): boolean;
    /**
     * @description Checks supplied items against given Promotion and returns products that
     *   fall in-scope of/ qualified for promotion.
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
}
