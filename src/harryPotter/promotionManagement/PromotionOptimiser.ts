// Internal Imports
import { Promotion } from './Promotion';
import { BuyThreeHarryPotterBooksSave10Percent } from './BuyThreeHarryPotterBooksSave10Percent';
import { BuyTwoHarryPotterBooksSave5Percent } from './BuyTwoHarryPotterBooksSave5Percent';
import { BuyFourHarryPotterBooksSave20Percent } from './BuyFourHarryPotterBooksSave20Percent';
import { BuyFiveHarryPotterBooksSave25Percent } from './BuyFiveHarryPotterBooksSave25Percent';
import { BuyThreeBooksGetOneFree } from './BuyThreeBooksGetOneFree';
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
export class PromotionOptimiser {
  /**
   * @description Enum for all Promotions, add new promotions here
   * @return {Array<Promotion>}
   */
  static promotions(): Array<Promotion> {
    return [
      new BuyTwoHarryPotterBooksSave5Percent(),
      new BuyThreeHarryPotterBooksSave10Percent(),
      new BuyFourHarryPotterBooksSave20Percent(),
      new BuyFiveHarryPotterBooksSave25Percent(),
      new BuyThreeBooksGetOneFree(),
    ];
  }

  /**
   * @description Iterates through each promotion and works out best discount available against basket
   * @param {Array<Product>} items
   * @return {number}
   */
  static getBestDiscount(
    items: Array<Product>,
    currency: string
  ): PromotionOptimiserReturn {
    // Create default result, used in comparing results from each Promotion Strategy
    let result: PromotionOptimiserReturn = {
      promotionNames: [],
      totalDiscount: 0,
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
        if (discount > result.totalDiscount) {
          // For each time the promotion is applied, add to result.promotionNames
          const promotionAppliedTimes = Array(
            qualifiedProducts.length / promotion.qualifyingProductCount
          ).fill(promotion.constructor.name);
          result = {
            promotionNames: [...promotionAppliedTimes],
            totalDiscount: discount,
          };
        }
      }
      // Remainder, calculate discount against what is divisble and perform recursion on remainder
      else {
        // Split basket qualified products into number divisible by promotion
        const discountableProducts = qualifiedProducts.splice(
          0,
          qualifiedProducts.length - remainder
        );
        // Calculate discount on basket qualified products
        const partialDiscount = promotion.calculateDiscount(
          discountableProducts,
          currency
        );
        // Take remainder of basket qualified products, check other promotions for discounts via PromotionOptimiser/ recursion
        const remainingProducts = qualifiedProducts.splice(-remainder);
        const recursionDiscount = PromotionOptimiser.getBestDiscount(
          remainingProducts,
          currency
        );
        // Tally-up partial and recursion discount
        const discount = partialDiscount + recursionDiscount.totalDiscount;
        if (discount > result.totalDiscount)
          result = {
            promotionNames: [
              promotion.constructor.name,
              ...recursionDiscount.promotionNames,
            ],
            totalDiscount: discount,
          };
      }
    });
    return result;
  }
}
