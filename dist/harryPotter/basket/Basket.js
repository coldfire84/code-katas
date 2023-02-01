"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = void 0;
const PromotionOptimiser_1 = require("../promotionManagement/PromotionOptimiser");
/**
 * @description Basket Class, represents a shopping cart/ basket. Conext Pattern.
 */
class Basket {
    /**
     * @description Create a new Basket
     * @param {string} currency
     */
    constructor(currency = 'GBP') {
        this.currency = currency;
        this.items = [];
    }
    /**
     * @description Add item to basket
     * @param {Product} item
     */
    addItem(item) {
        this.items.push(item);
    }
    /**
     * @description Remove item from basket
     * @param {Product} item
     */
    removeItem(item) {
        this.items = this.items.filter((obj) => obj.id !== item.id);
    }
    /**
     * @description Returns total payable, after discounts
     * @returns {number}
     */
    calculateTotal() {
        // Get list price/ total for basket
        const listPrice = this.items.reduce((acc, item) => {
            const price = item.price.find((obj) => (obj.currency = this.currency));
            acc += price?.amount ? price.amount : 0;
            return acc;
        }, 0);
        // Get promotional discount
        const discount = PromotionOptimiser_1.PromotionOptimiser.getBestDiscount(this.items, this.currency);
        return {
            listPrice,
            discount: discount.totalDiscount,
            total: listPrice - discount.totalDiscount,
            promotions: discount.promotionNames,
        };
    }
}
exports.Basket = Basket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFza2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL2Jhc2tldC9CYXNrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsa0ZBQStFO0FBVS9FOztHQUVHO0FBQ0gsTUFBYSxNQUFNO0lBR2pCOzs7T0FHRztJQUNILFlBQVksUUFBUSxHQUFHLEtBQUs7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxJQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsSUFBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsY0FBYztRQUNaLG1DQUFtQztRQUNuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNoRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLEdBQUcsSUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTiwyQkFBMkI7UUFDM0IsTUFBTSxRQUFRLEdBQUcsdUNBQWtCLENBQUMsZUFBZSxDQUNqRCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztRQUNGLE9BQU87WUFDTCxTQUFTO1lBQ1QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFhO1lBQ2hDLEtBQUssRUFBRSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWE7WUFDekMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxjQUFjO1NBQ3BDLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoREQsd0JBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJuYWwgSW1wb3J0c1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3RNYW5hZ2VtZW50L1Byb2R1Y3QnO1xuaW1wb3J0IHsgUHJvbW90aW9uT3B0aW1pc2VyIH0gZnJvbSAnLi4vcHJvbW90aW9uTWFuYWdlbWVudC9Qcm9tb3Rpb25PcHRpbWlzZXInO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gSW50ZXJmYWNlIGZvciBCYXNrZXQgY2FsY3VsYXRldG90YWwoKSByZXR1cm5cbiAqL1xuaW50ZXJmYWNlIEJhc2tldFRvdGFsUmV0dXJuIHtcbiAgbGlzdFByaWNlOiBudW1iZXI7XG4gIGRpc2NvdW50OiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG4gIHByb21vdGlvbnM6IEFycmF5PHN0cmluZz47XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBCYXNrZXQgQ2xhc3MsIHJlcHJlc2VudHMgYSBzaG9wcGluZyBjYXJ0LyBiYXNrZXQuIENvbmV4dCBQYXR0ZXJuLlxuICovXG5leHBvcnQgY2xhc3MgQmFza2V0IHtcbiAgcHVibGljIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHB1YmxpYyBpdGVtczogQXJyYXk8UHJvZHVjdD47XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IEJhc2tldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVuY3lcbiAgICovXG4gIGNvbnN0cnVjdG9yKGN1cnJlbmN5ID0gJ0dCUCcpIHtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQWRkIGl0ZW0gdG8gYmFza2V0XG4gICAqIEBwYXJhbSB7UHJvZHVjdH0gaXRlbVxuICAgKi9cbiAgYWRkSXRlbShpdGVtOiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGl0ZW0gZnJvbSBiYXNrZXRcbiAgICogQHBhcmFtIHtQcm9kdWN0fSBpdGVtXG4gICAqL1xuICByZW1vdmVJdGVtKGl0ZW06IFByb2R1Y3QpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKG9iaikgPT4gb2JqLmlkICE9PSBpdGVtLmlkKTtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgdG90YWwgcGF5YWJsZSwgYWZ0ZXIgZGlzY291bnRzXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBjYWxjdWxhdGVUb3RhbCgpOiBCYXNrZXRUb3RhbFJldHVybiB7XG4gICAgLy8gR2V0IGxpc3QgcHJpY2UvIHRvdGFsIGZvciBiYXNrZXRcbiAgICBjb25zdCBsaXN0UHJpY2UgPSB0aGlzLml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0ucHJpY2UuZmluZCgob2JqKSA9PiAob2JqLmN1cnJlbmN5ID0gdGhpcy5jdXJyZW5jeSkpO1xuICAgICAgYWNjICs9IHByaWNlPy5hbW91bnQgPyBwcmljZS5hbW91bnQgOiAwO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgICAvLyBHZXQgcHJvbW90aW9uYWwgZGlzY291bnRcbiAgICBjb25zdCBkaXNjb3VudCA9IFByb21vdGlvbk9wdGltaXNlci5nZXRCZXN0RGlzY291bnQoXG4gICAgICB0aGlzLml0ZW1zLFxuICAgICAgdGhpcy5jdXJyZW5jeVxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpc3RQcmljZSxcbiAgICAgIGRpc2NvdW50OiBkaXNjb3VudC50b3RhbERpc2NvdW50LFxuICAgICAgdG90YWw6IGxpc3RQcmljZSAtIGRpc2NvdW50LnRvdGFsRGlzY291bnQsXG4gICAgICBwcm9tb3Rpb25zOiBkaXNjb3VudC5wcm9tb3Rpb25OYW1lcyxcbiAgICB9O1xuICB9XG59XG4iXX0=