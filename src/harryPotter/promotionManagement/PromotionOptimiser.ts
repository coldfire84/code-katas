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
      const qualifiedProducts = promotion.getQualifiedProducts(items, currency);
      // Too few products for discount to apply, skip this promotion
      if (items.length < promotion.qualifyingProductCount) return;
      // Check if qualified products divides up by qualifyingProductCount
      const remainder =
        qualifiedProducts.length % promotion.qualifyingProductCount;
      // If no remainder apply discount to all of the products in qualifiedProducts
      if (remainder === 0) {
        const discount = promotion.calculateDiscount(
          qualifiedProducts,
          currency
        );
        if (discount > bestResult.discount)
          bestResult = {
            promotionName: promotion.constructor.name,
            discount,
          };
      }
      // Remainder, calculate discount against what is divisble and perform recursion on remainder
      else {
        // Split array into number of products divisible by promotion
        const discountableProducts = qualifiedProducts.splice(
          0,
          qualifiedProducts.length - remainder
        );
        // Calculate discount on promotion-applicable products
        const partialDiscount = promotion.calculateDiscount(
          discountableProducts,
          currency
        );
        // Take remainder of array, check other promotions for discounts via PromotionOptimiser
        const remainingProducts = qualifiedProducts.splice(-remainder);
        const recursionDiscount = PromotionOptimiser.getBestDiscount(
          remainingProducts,
          currency
        );
        // Tally-up partial and recursion discount
        const discount = partialDiscount + recursionDiscount;
        if (discount > bestResult.discount)
          bestResult = {
            promotionName: promotion.constructor.name,
            discount,
          };
      }
    });
    return bestResult.discount;
  }
}
