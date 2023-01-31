"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Product_1 = require("./Product");
/**
 * @description Book. Product Management B/C.
 */
class Book extends Product_1.Product {
    /**
     * @description Create a new Book
     * @param {BookProps} props
     * @param {Array<price>} price
     * @param {string} id
     */
    constructor(props, price, id) {
        super(price, id);
        this.props = props;
    }
    /**
     * @description Get book title
     * @returns {string}
     */
    get title() {
        return this.props.title;
    }
}
exports.Book = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXJyeVBvdHRlci9wcm9kdWN0TWFuYWdlbWVudC9Cb29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUEyQztBQVEzQzs7R0FFRztBQUNILE1BQWEsSUFBSyxTQUFRLGlCQUFPO0lBRS9COzs7OztPQUtHO0lBQ0gsWUFBWSxLQUFnQixFQUFFLEtBQW1CLEVBQUUsRUFBVztRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQW5CRCxvQkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0LCBQcmljZSB9IGZyb20gJy4vUHJvZHVjdCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEJvb2sgSW50ZXJhY2UuIFByb2R1Y3QgTWFuYWdlbWVudCBCL0MuXG4gKi9cbmludGVyZmFjZSBCb29rUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQm9vay4gUHJvZHVjdCBNYW5hZ2VtZW50IEIvQy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb2sgZXh0ZW5kcyBQcm9kdWN0IHtcbiAgcHJpdmF0ZSBwcm9wczogQm9va1Byb3BzO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBCb29rXG4gICAqIEBwYXJhbSB7Qm9va1Byb3BzfSBwcm9wc1xuICAgKiBAcGFyYW0ge0FycmF5PHByaWNlPn0gcHJpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQm9va1Byb3BzLCBwcmljZTogQXJyYXk8UHJpY2U+LCBpZD86IHN0cmluZykge1xuICAgIHN1cGVyKHByaWNlLCBpZCk7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB9XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2V0IGJvb2sgdGl0bGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpdGxlO1xuICB9XG59XG4iXX0=