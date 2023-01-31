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
export declare class Book extends Product {
    private props;
    /**
     * @description Create a new Book
     * @param {BookProps} props
     * @param {Array<price>} price
     * @param {string} id
     */
    constructor(props: BookProps, price: Array<Price>, id?: string);
    /**
     * @description Get book title
     * @returns {string}
     */
    get title(): string;
}
export {};
