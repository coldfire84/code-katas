import { v4 as uuid } from 'uuid';

/**
 * @descriptionPrice Interace. Product Management B/C.
 */
export interface Price {
  currency: string;
  amount: number;
}
/**
 * @description Product base/ abstract class. Product Management B/C.
 */
export abstract class Product {
  public id: string;
  public price: Array<Price>;
  /**
   * @description Create a new Product
   * @param {Array<price>} price
   * @param {string} id
   */
  constructor(price: Array<Price>, id?: string) {
    this.id = id || uuid();
    this.price = price;
  }
}
