// Internal Imports
import { Promotion } from './Promotion';
import { BuyThreeHarryPotterBooksSave10Percent } from './BuyThreeHarryPotterBooksSave10Percent';
import { BuyTwoHarryPotterBooksSave5Percent } from './BuyTwoHarryPotterBooksSave5Percent';
import { BuyFourHarryPotterBooksSave20Percent } from './BuyFourHarryPotterBooksSave20Percent';
import { BuyFiveHarryPotterBooksSave25Percent } from './BuyFiveHarryPotterBooksSave25Percent';
import { Product } from '../productManagement/Product';
/**
 * @description Promotion Optimiser, used to find best promotion. Uses Optimiser Pattern.
 */
export class PromotionOptimiser {
  /**
   * @description Enum for all Promotions
   * @return {Array<Promotion>}
   */
  static promotions(): Array<Promotion> {
    return [
      new BuyTwoHarryPotterBooksSave5Percent(),
      new BuyThreeHarryPotterBooksSave10Percent(),
      new BuyFourHarryPotterBooksSave20Percent(),
      new BuyFiveHarryPotterBooksSave25Percent(),
    ];
  }
  /**
   * @description Iterates through each promotion and works out best discount available against basket
   * @param {Array<Product>} items
   * @return {number}
   */
  static getBestDiscount(items: Array<Product>, currency: string): number {
    let bestResult: {
      promotionName: string;
      discount: number;
    } = {
      promotionName: '',
      discount: 0,
    };
    // Iterate through promotions to calculate best discount
    this.promotions().map((promotion) => {
      const discount = promotion.applyDiscount(items, currency);
      if (discount > bestResult.discount)
        bestResult = {
          promotionName: promotion.constructor.name,
          discount,
        };
    });
    // console.log(bestResult);
    return bestResult.discount;
  }
}
