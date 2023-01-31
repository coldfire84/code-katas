// Internal Imports
import { Product } from '../productManagement/Product';
import { PromotionOptimiser } from './PromotionOptimiser';
/**
 * @description Promotion, abstract/ base class. Promotion Management B/C.
 */
export abstract class Promotion {
  protected qualifyingProducts: Array<string>;
  protected discount: number;
  public qualifyingProductCount: number;
  public allowMultiplesOfSameProduct: boolean;
  /**
   * @description Check product qualifies for discount
   * @param {Product} product
   */
  isQualifyingProduct(product: Product) {
    return Array.prototype.includes.call(this.qualifyingProducts, product.id);
  }
  /**
   * @description Get Promotion-qualifying Products from supplied basket items
   * @param {Array<Product>} items
   * @param {string} currency
   * @returns {Array<Product>}
   */
  getQualifiedProducts(
    items: Array<Product>,
    currency: string
  ): Array<Product> {
    // Filter unique products, depending on promotion `allowMultiplesOfSameProduct`
    const qualifiedProducts: Array<Product> = this.allowMultiplesOfSameProduct
      ? items.reduce((arr: Array<Product>, item: Product) => {
          if (this.isQualifyingProduct(item)) return [...arr, item];
          else return arr;
        }, [])
      : items.reduce((arr: Array<Product>, item: Product) => {
          if (this.isQualifyingProduct(item))
            return arr.some((obj: Product) => obj.id === item.id)
              ? arr
              : [...arr, item];
          else return arr;
        }, []);
    // Sort Products by least expensive --> discount against lowest cost only.
    const qualifiedProductsByLeastCost = qualifiedProducts.sort((a, b) => {
      const priceA = a.price.find((obj) => (obj.currency = currency));
      const priceB = b.price.find((obj) => (obj.currency = currency));
      if (priceA === undefined || priceB === undefined)
        throw new Error('Pricing is erroneous');
      return priceA.amount - priceB.amount;
    });
    return qualifiedProductsByLeastCost;
  }
  /**
   * @description Calculate discount on array of products
   * @param {Array<Product>} qualifiedProducts
   * @param {string} currency
   * @returns {number} discount value agaist qualifying products
   */
  calculateDiscount(
    qualifiedProducts: Array<Product>,
    currency: string
  ): number {
    const discount = qualifiedProducts.reduce((acc, item) => {
      const price = item.price.find((obj) => (obj.currency = currency));
      acc += price ? price.amount * this.discount : 0;
      return acc;
    }, 0);
    return discount;
  }
  /**
   * @description Apply discount to given items
   * @param {Array<Product>} items
   * @returns {number} discount value agaist qualified products
   */
  applyDiscount(items: Array<Product>, currency: string): number {
    const qualifiedProducts = this.getQualifiedProducts(items, currency);
    // Too few products for discount to apply, return 0 discount for this promotion
    if (items.length < this.qualifyingProductCount) return 0;
    // Check if qualified products divides up by qualifyingProductCount
    const remainder = qualifiedProducts.length % this.qualifyingProductCount;
    // If no remainder apply discount to all of the products in qualifiedProducts
    if (remainder === 0) {
      return this.calculateDiscount(qualifiedProducts, currency);
    }
    // Remainder, calculate discount against what is divisble and perform recursion on remainder
    else {
      // Split array into number of products divisible by promotion
      const discountableProducts = qualifiedProducts.splice(
        0,
        qualifiedProducts.length - remainder
      );
      // Calculate discount on promotion-applicable products
      const discount = this.calculateDiscount(discountableProducts, currency);
      // Take remainder of array, check other promotions for discounts via PromotionOptimiser
      const remainingProducts = qualifiedProducts.splice(-remainder);
      const recursionDiscount = PromotionOptimiser.getBestDiscount(
        remainingProducts,
        currency
      );
      return discount + recursionDiscount;
    }
  }
}
