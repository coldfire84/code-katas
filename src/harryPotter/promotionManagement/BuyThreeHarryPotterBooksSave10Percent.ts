// Internal Imports
import { Promotion } from './Promotion';
import { harryPotterBooks } from './qualifyingProducts';
/**
 * @description By three, save 10% Promotion, uses Strategy Pattern
 */
export class BuyThreeHarryPotterBooksSave10Percent extends Promotion {
  constructor() {
    super();
    this.qualifyingProducts = harryPotterBooks;
    this.discount = 0.1; // 10%
    this.qualifyingProductCount = 3;
    this.allowMultiplesOfSameProduct = false;
  }
}
