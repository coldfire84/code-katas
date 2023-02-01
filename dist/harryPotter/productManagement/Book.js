"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
// Internal Imports
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXJyeVBvdHRlci9wcm9kdWN0TWFuYWdlbWVudC9Cb29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1CQUFtQjtBQUNuQix1Q0FBMkM7QUFPM0M7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxpQkFBTztJQUUvQjs7Ozs7T0FLRztJQUNILFlBQVksS0FBZ0IsRUFBRSxLQUFtQixFQUFFLEVBQVc7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFuQkQsb0JBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJuYWwgSW1wb3J0c1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJpY2UgfSBmcm9tICcuL1Byb2R1Y3QnO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gQm9vayBJbnRlcmFjZS4gUHJvZHVjdCBNYW5hZ2VtZW50IEIvQy5cbiAqL1xuaW50ZXJmYWNlIEJvb2tQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBCb29rLiBQcm9kdWN0IE1hbmFnZW1lbnQgQi9DLlxuICovXG5leHBvcnQgY2xhc3MgQm9vayBleHRlbmRzIFByb2R1Y3Qge1xuICBwcml2YXRlIHByb3BzOiBCb29rUHJvcHM7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IEJvb2tcbiAgICogQHBhcmFtIHtCb29rUHJvcHN9IHByb3BzXG4gICAqIEBwYXJhbSB7QXJyYXk8cHJpY2U+fSBwcmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCb29rUHJvcHMsIHByaWNlOiBBcnJheTxQcmljZT4sIGlkPzogc3RyaW5nKSB7XG4gICAgc3VwZXIocHJpY2UsIGlkKTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHZXQgYm9vayB0aXRsZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGl0bGU7XG4gIH1cbn1cbiJdfQ==