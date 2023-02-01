// Internal Imports
import { Product, Price } from './Product';
/**
 * @description Book Interace. Product Management B/C.
 */
interface BookProps {
  title: string;
}
/**
 * @description Book. Product Management B/C.
 */
export class Book extends Product {
  private props: BookProps;
  /**
   * @description Create a new Book
   * @param {BookProps} props
   * @param {Array<price>} price
   * @param {string} id
   */
  constructor(props: BookProps, price: Array<Price>, id?: string) {
    super(price, id);
    this.props = props;
  }
  /**
   * @description Get book title
   * @returns {string}
   */
  get title(): string {
    return this.props.title;
  }
}
