import { Promotion } from './Promotion';
import { Product } from '../productManagement/Product';
/**
 * @description Return Interface for PromotionOptimiser
 */
interface PromotionOptimiserReturn {
    promotionNames: Array<string>;
    totalDiscount: number;
}
/**
 * @description Promotion Optimiser, used to find best promotion. Uses Optimiser Pattern.
 */
export declare class PromotionOptimiser {
    /**
     * @description Enum for all Promotions, add new promotions here
     * @return {Array<Promotion>}
     */
    static promotions(): Array<Promotion>;
    /**
     * @description Iterates through each promotion and works out best discount available against basket
     * @param {Array<Product>} items
     * @return {number}
     */
    static getBestDiscount(items: Array<Product>, currency: string): PromotionOptimiserReturn;
}
export {};
