// Internal Imports
import { Product } from '../productManagement/Product';
/**
 * @description Promotion, abstract/ base class. Promotion Management B/C.
 */
export abstract class Promotion {
  protected discount: number;
  public qualifyingProducts: Array<string>;
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
   * @description Checks supplied items against given Promotion and returns products that
   *   fall in-scope of/ qualified for promotion.
   * @param {Array<Product>} items
   * @param {string} currency
   * @param {Promotion} promotion
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
}
