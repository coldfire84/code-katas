"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const uuid_1 = require("uuid");
/**
 * @description Product base/ abstract class. Product Management B/C.
 */
class Product {
    /**
     * @description Create a new Product
     * @param {Array<price>} price
     * @param {string} id
     */
    constructor(price, id) {
        this.id = id || (0, uuid_1.v4)();
        this.price = price;
    }
}
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXJyeVBvdHRlci9wcm9kdWN0TWFuYWdlbWVudC9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFrQztBQVNsQzs7R0FFRztBQUNILE1BQXNCLE9BQU87SUFHM0I7Ozs7T0FJRztJQUNILFlBQVksS0FBbUIsRUFBRSxFQUFXO1FBQzFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUEsU0FBSSxHQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBWkQsMEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uUHJpY2UgSW50ZXJhY2UuIFByb2R1Y3QgTWFuYWdlbWVudCBCL0MuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJpY2Uge1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cbi8qKlxuICogQGRlc2NyaXB0aW9uIFByb2R1Y3QgYmFzZS8gYWJzdHJhY3QgY2xhc3MuIFByb2R1Y3QgTWFuYWdlbWVudCBCL0MuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9kdWN0IHtcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBwcmljZTogQXJyYXk8UHJpY2U+O1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBQcm9kdWN0XG4gICAqIEBwYXJhbSB7QXJyYXk8cHJpY2U+fSBwcmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaWNlOiBBcnJheTxQcmljZT4sIGlkPzogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9IGlkIHx8IHV1aWQoKTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gIH1cbn1cbiJdfQ==