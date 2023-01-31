// Internal Imports
import { Promotion } from './Promotion';
import { qualifyingProducts } from './qualifyingProducts';
/**
 * @description By four, save 20% Promotion, uses Strategy Pattern
 */
export class BuyFourHarryPotterBooksSave20Percent extends Promotion {
  constructor() {
    super();
    this.qualifyingProducts = qualifyingProducts;
    this.discount = 0.2; // 20%
    this.qualifyingProductCount = 4;
    this.allowMultiplesOfSameProduct = false;
  }
}
