"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Internal Imports
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXJyeVBvdHRlci9wcm9kdWN0TWFuYWdlbWVudC9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1CQUFtQjtBQUNuQiwrQkFBa0M7QUFRbEM7O0dBRUc7QUFDSCxNQUFzQixPQUFPO0lBRzNCOzs7O09BSUc7SUFDSCxZQUFZLEtBQW1CLEVBQUUsRUFBVztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFBLFNBQUksR0FBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQVpELDBCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJuYWwgSW1wb3J0c1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuLyoqXG4gKiBAZGVzY3JpcHRpb25QcmljZSBJbnRlcmFjZS4gUHJvZHVjdCBNYW5hZ2VtZW50IEIvQy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcmljZSB7XG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUHJvZHVjdCBiYXNlLyBhYnN0cmFjdCBjbGFzcy4gUHJvZHVjdCBNYW5hZ2VtZW50IEIvQy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb2R1Y3Qge1xuICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgcHVibGljIHByaWNlOiBBcnJheTxQcmljZT47XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IFByb2R1Y3RcbiAgICogQHBhcmFtIHtBcnJheTxwcmljZT59IHByaWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpY2U6IEFycmF5PFByaWNlPiwgaWQ/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmlkID0gaWQgfHwgdXVpZCgpO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgfVxufVxuIl19