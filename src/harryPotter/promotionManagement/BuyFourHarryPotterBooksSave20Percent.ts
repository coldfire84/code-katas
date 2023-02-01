// Internal Imports
import { Promotion } from './Promotion';
import { harryPotterBooks } from './qualifyingProducts';
/**
 * @description By four, save 20% Promotion, uses Strategy Pattern
 */
export class BuyFourHarryPotterBooksSave20Percent extends Promotion {
  constructor() {
    super();
    this.qualifyingProducts = harryPotterBooks;
    this.discount = 0.2; // 20%
    this.qualifyingProductCount = 4;
    this.allowMultiplesOfSameProduct = false;
  }
}
