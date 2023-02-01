// Internal Imports
import { Promotion } from './Promotion';
import { harryPotterBooks } from './qualifyingProducts';
/**
 * @description By five, save 25% Promotion, uses Strategy Pattern
 */
export class BuyFiveHarryPotterBooksSave25Percent extends Promotion {
  constructor() {
    super();
    this.qualifyingProducts = harryPotterBooks;
    this.discount = 0.25; // 20%
    this.qualifyingProductCount = 5;
    this.allowMultiplesOfSameProduct = false;
  }
}
