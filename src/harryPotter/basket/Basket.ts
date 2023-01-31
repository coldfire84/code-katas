// Internal Imports
import { Product } from '../productManagement/Product';
import { PromotionOptimiser } from '../promotionManagement/PromotionOptimiser';
/**
 * @description Basket Class, represents a shopping cart/ basket. Conext Pattern.
 */
export class Basket {
  public currency: string;
  public items: Array<Product>;
  /**
   * @description Create a new Basket
   * @param {string} currency
   */
  constructor(currency = 'GBP') {
    this.currency = currency;
    this.items = [];
  }
  /**
   * @description Add item to basket
   * @param {Product} item
   */
  addItem(item: Product): void {
    this.items.push(item);
  }
  /**
   * @description Remove item from basket
   * @param {Product} item
   */
  removeItem(item: Product): void {
    this.items = this.items.filter((obj) => obj.id !== item.id);
  }
  /**
   * @description Returns total payable, after discounts
   * @returns {number}
   */
  calculateTotal(): number {
    // Get list price/ total for basket
    const total = this.items.reduce((acc, item) => {
      const price = item.price.find((obj) => (obj.currency = this.currency));
      acc += price?.amount ? price.amount : 0;
      return acc;
    }, 0);
    // Get promotional discount
    const discount = PromotionOptimiser.getBestDiscount(
      this.items,
      this.currency
    );
    return total - discount;
  }
}
