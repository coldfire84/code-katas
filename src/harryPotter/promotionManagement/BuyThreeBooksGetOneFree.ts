// Internal Imports
import { Promotion } from './Promotion';
import { roaldDahlBooks } from './qualifyingProducts';
/**
 * @description By two, save 5% Promotion, uses Strategy Pattern
 */
export class BuyThreeBooksGetOneFree extends Promotion {
  constructor() {
    super();
    this.qualifyingProducts = roaldDahlBooks;
    this.discount = 0.33; // 33%
    this.qualifyingProductCount = 3;
    this.allowMultiplesOfSameProduct = true;
  }
}
