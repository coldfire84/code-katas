// Internal Imports
import { Promotion } from './Promotion';
import { qualifyingProducts } from './qualifyingProducts';
/**
 * @description By three, save 10% Promotion, uses Strategy Pattern
 */
export class BuyThreeHarryPotterBooksSave10Percent extends Promotion {
  constructor() {
    super();
    this.qualifyingProducts = qualifyingProducts;
    this.discount = 0.1; // 10%
    this.qualifyingProductCount = 3;
    this.allowMultiplesOfSameProduct = false;
  }
}
