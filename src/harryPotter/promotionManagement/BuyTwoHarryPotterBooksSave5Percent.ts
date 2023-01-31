// Internal Imports
import { Promotion } from './Promotion';
import { qualifyingProducts } from './qualifyingProducts';
/**
 * @description By two, save 5% Promotion, uses Strategy Pattern
 */
export class BuyTwoHarryPotterBooksSave5Percent extends Promotion {
  constructor() {
    super();
    this.qualifyingProducts = qualifyingProducts;
    this.discount = 0.05; // 5%
    this.qualifyingProductCount = 2;
    this.allowMultiplesOfSameProduct = false;
  }
}
