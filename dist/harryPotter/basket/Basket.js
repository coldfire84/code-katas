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
        const total = this.items.reduce((acc, item) => {
            const price = item.price.find((obj) => (obj.currency = this.currency));
            acc += price?.amount ? price.amount : 0;
            return acc;
        }, 0);
        // Get promotional discount
        const discount = PromotionOptimiser_1.PromotionOptimiser.getBestDiscount(this.items, this.currency);
        return total - discount;
    }
}
exports.Basket = Basket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFza2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL2Jhc2tldC9CYXNrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsa0ZBQStFO0FBQy9FOztHQUVHO0FBQ0gsTUFBYSxNQUFNO0lBR2pCOzs7T0FHRztJQUNILFlBQVksUUFBUSxHQUFHLEtBQUs7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxJQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsSUFBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsY0FBYztRQUNaLG1DQUFtQztRQUNuQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLEdBQUcsSUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTiwyQkFBMkI7UUFDM0IsTUFBTSxRQUFRLEdBQUcsdUNBQWtCLENBQUMsZUFBZSxDQUNqRCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztRQUNGLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUEzQ0Qsd0JBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJuYWwgSW1wb3J0c1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3RNYW5hZ2VtZW50L1Byb2R1Y3QnO1xuaW1wb3J0IHsgUHJvbW90aW9uT3B0aW1pc2VyIH0gZnJvbSAnLi4vcHJvbW90aW9uTWFuYWdlbWVudC9Qcm9tb3Rpb25PcHRpbWlzZXInO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gQmFza2V0IENsYXNzLCByZXByZXNlbnRzIGEgc2hvcHBpbmcgY2FydC8gYmFza2V0LiBDb25leHQgUGF0dGVybi5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2tldCB7XG4gIHB1YmxpYyBjdXJyZW5jeTogc3RyaW5nO1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PFByb2R1Y3Q+O1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBCYXNrZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbmN5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihjdXJyZW5jeSA9ICdHQlAnKSB7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFkZCBpdGVtIHRvIGJhc2tldFxuICAgKiBAcGFyYW0ge1Byb2R1Y3R9IGl0ZW1cbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogUHJvZHVjdCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZSBpdGVtIGZyb20gYmFza2V0XG4gICAqIEBwYXJhbSB7UHJvZHVjdH0gaXRlbVxuICAgKi9cbiAgcmVtb3ZlSXRlbShpdGVtOiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKChvYmopID0+IG9iai5pZCAhPT0gaXRlbS5pZCk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRvdGFsIHBheWFibGUsIGFmdGVyIGRpc2NvdW50c1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgY2FsY3VsYXRlVG90YWwoKTogbnVtYmVyIHtcbiAgICAvLyBHZXQgbGlzdCBwcmljZS8gdG90YWwgZm9yIGJhc2tldFxuICAgIGNvbnN0IHRvdGFsID0gdGhpcy5pdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnByaWNlLmZpbmQoKG9iaikgPT4gKG9iai5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3kpKTtcbiAgICAgIGFjYyArPSBwcmljZT8uYW1vdW50ID8gcHJpY2UuYW1vdW50IDogMDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgLy8gR2V0IHByb21vdGlvbmFsIGRpc2NvdW50XG4gICAgY29uc3QgZGlzY291bnQgPSBQcm9tb3Rpb25PcHRpbWlzZXIuZ2V0QmVzdERpc2NvdW50KFxuICAgICAgdGhpcy5pdGVtcyxcbiAgICAgIHRoaXMuY3VycmVuY3lcbiAgICApO1xuICAgIHJldHVybiB0b3RhbCAtIGRpc2NvdW50O1xuICB9XG59XG4iXX0=