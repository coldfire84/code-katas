"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion = void 0;
const PromotionOptimiser_1 = require("./PromotionOptimiser");
/**
 * @description Promotion, abstract/ base class. Promotion Management B/C.
 */
class Promotion {
    /**
     * @description Check product qualifies for discount
     * @param {Product} product
     */
    isQualifyingProduct(product) {
        return Array.prototype.includes.call(this.qualifyingProducts, product.id);
    }
    /**
     * @description Get Promotion-qualifying Products from supplied basket items
     * @param {Array<Product>} items
     * @param {string} currency
     * @returns {Array<Product>}
     */
    getQualifiedProducts(items, currency) {
        // Filter unique products, depending on promotion `allowMultiplesOfSameProduct`
        const qualifiedProducts = this.allowMultiplesOfSameProduct
            ? items.reduce((arr, item) => {
                if (this.isQualifyingProduct(item))
                    return [...arr, item];
                else
                    return arr;
            }, [])
            : items.reduce((arr, item) => {
                if (this.isQualifyingProduct(item))
                    return arr.some((obj) => obj.id === item.id)
                        ? arr
                        : [...arr, item];
                else
                    return arr;
            }, []);
        // Sort Products by least expensive --> discount against lowest cost only.
        const qualifiedProductsByLeastCost = qualifiedProducts.sort((a, b) => {
            const priceA = a.price.find((obj) => (obj.currency = currency));
            const priceB = b.price.find((obj) => (obj.currency = currency));
            if (priceA === undefined || priceB === undefined)
                throw new Error('Pricing is erroneous');
            return priceA.amount - priceB.amount;
        });
        return qualifiedProductsByLeastCost;
    }
    /**
     * @description Calculate discount on array of products
     * @param {Array<Product>} qualifiedProducts
     * @param {string} currency
     * @returns {number} discount value agaist qualifying products
     */
    calculateDiscount(qualifiedProducts, currency) {
        const discount = qualifiedProducts.reduce((acc, item) => {
            const price = item.price.find((obj) => (obj.currency = currency));
            acc += price ? price.amount * this.discount : 0;
            return acc;
        }, 0);
        return discount;
    }
    /**
     * @description Apply discount to given items
     * @param {Array<Product>} items
     * @returns {number} discount value agaist qualified products
     */
    applyDiscount(items, currency) {
        const qualifiedProducts = this.getQualifiedProducts(items, currency);
        // Too few products for discount to apply, return 0 discount for this promotion
        if (items.length < this.qualifyingProductCount)
            return 0;
        // Check if qualified products divides up by qualifyingProductCount
        const remainder = qualifiedProducts.length % this.qualifyingProductCount;
        // If no remainder apply discount to all of the products in qualifiedProducts
        if (remainder === 0) {
            return this.calculateDiscount(qualifiedProducts, currency);
        }
        // Remainder, calculate discount against what is divisble and perform recursion on remainder
        else {
            // Split array into number of products divisible by promotion
            const discountableProducts = qualifiedProducts.splice(0, qualifiedProducts.length - remainder);
            // Calculate discount on promotion-applicable products
            const discount = this.calculateDiscount(discountableProducts, currency);
            // Take remainder of array, check other promotions for discounts via PromotionOptimiser
            const remainingProducts = qualifiedProducts.splice(-remainder);
            const recursionDiscount = PromotionOptimiser_1.PromotionOptimiser.getBestDiscount(remainingProducts, currency);
            return discount + recursionDiscount;
        }
    }
}
exports.Promotion = Promotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW90aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL3Byb21vdGlvbk1hbmFnZW1lbnQvUHJvbW90aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDZEQUEwRDtBQUMxRDs7R0FFRztBQUNILE1BQXNCLFNBQVM7SUFLN0I7OztPQUdHO0lBQ0gsbUJBQW1CLENBQUMsT0FBZ0I7UUFDbEMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCxvQkFBb0IsQ0FDbEIsS0FBcUIsRUFDckIsUUFBZ0I7UUFFaEIsK0VBQStFO1FBQy9FLE1BQU0saUJBQWlCLEdBQW1CLElBQUksQ0FBQywyQkFBMkI7WUFDeEUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFtQixFQUFFLElBQWEsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7b0JBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztvQkFDckQsT0FBTyxHQUFHLENBQUM7WUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBRSxJQUFhLEVBQUUsRUFBRTtnQkFDbEQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO29CQUNoQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDbkQsQ0FBQyxDQUFDLEdBQUc7d0JBQ0wsQ0FBQyxDQUFDLENBQUMsR0FBRyxH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Q3JDO0lBQ0gsQ0FBQztDQUNGO0FBL0ZELDhCQStGQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVybmFsIEltcG9ydHNcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0TWFuYWdlbWVudC9Qcm9kdWN0JztcbmltcG9ydCB7IFByb21vdGlvbk9wdGltaXNlciB9IGZyb20gJy4vUHJvbW90aW9uT3B0aW1pc2VyJztcbi8qKlxuICogQGRlc2NyaXB0aW9uIFByb21vdGlvbiwgYWJzdHJhY3QvIGJhc2UgY2xhc3MuIFByb21vdGlvbiBNYW5hZ2VtZW50IEIvQy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb21vdGlvbiB7XG4gIHByb3RlY3RlZCBxdWFsaWZ5aW5nUHJvZHVjdHM6IEFycmF5PHN0cmluZz47XG4gIHByb3RlY3RlZCBkaXNjb3VudDogbnVtYmVyO1xuICBwdWJsaWMgcXVhbGlmeWluZ1Byb2R1Y3RDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgYWxsb3dNdWx0aXBsZXNPZlNhbWVQcm9kdWN0OiBib29sZWFuO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIHByb2R1Y3QgcXVhbGlmaWVzIGZvciBkaXNjb3VudFxuICAgKiBAcGFyYW0ge1Byb2R1Y3R9IHByb2R1Y3RcbiAgICovXG4gIGlzUXVhbGlmeWluZ1Byb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMuY2FsbCh0aGlzLnF1YWxpZnlpbmdQcm9kdWN0cywgcHJvZHVjdC5pZCk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHZXQgUHJvbW90aW9uLXF1YWxpZnlpbmcgUHJvZHVjdHMgZnJvbSBzdXBwbGllZCBiYXNrZXQgaXRlbXNcbiAgICogQHBhcmFtIHtBcnJheTxQcm9kdWN0Pn0gaXRlbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbmN5XG4gICAqIEByZXR1cm5zIHtBcnJheTxQcm9kdWN0Pn1cbiAgICovXG4gIGdldFF1YWxpZmllZFByb2R1Y3RzKFxuICAgIGl0ZW1zOiBBcnJheTxQcm9kdWN0PixcbiAgICBjdXJyZW5jeTogc3RyaW5nXG4gICk6IEFycmF5PFByb2R1Y3Q+IHtcbiAgICAvLyBGaWx0ZXIgdW5pcXVlIHByb2R1Y3RzLCBkZXBlbmRpbmcgb24gcHJvbW90aW9uIGBhbGxvd011bHRpcGxlc09mU2FtZVByb2R1Y3RgXG4gICAgY29uc3QgcXVhbGlmaWVkUHJvZHVjdHM6IEFycmF5PFByb2R1Y3Q+ID0gdGhpcy5hbGxvd011bHRpcGxlc09mU2FtZVByb2R1Y3RcbiAgICAgID8gaXRlbXMucmVkdWNlKChhcnI6IEFycmF5PFByb2R1Y3Q+LCBpdGVtOiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNRdWFsaWZ5aW5nUHJvZHVjdChpdGVtKSkgcmV0dXJuIFsuLi5hcnIsIGl0ZW1dO1xuICAgICAgICAgIGVsc2UgcmV0dXJuIGFycjtcbiAgICAgICAgfSwgW10pXG4gICAgICA6IGl0ZW1zLnJlZHVjZSgoYXJyOiBBcnJheTxQcm9kdWN0PiwgaXRlbTogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUXVhbGlmeWluZ1Byb2R1Y3QoaXRlbSkpXG4gICAgICAgICAgICByZXR1cm4gYXJyLnNvbWUoKG9iajogUHJvZHVjdCkgPT4gb2JqLmlkID09PSBpdGVtLmlkKVxuICAgICAgICAgICAgICA/IGFyclxuICAgICAgICAgICAgICA6IFsuLi5hcnIsIGl0ZW1dO1xuICAgICAgICAgIGVsc2UgcmV0dXJuIGFycjtcbiAgICAgICAgfSwgW10pO1xuICAgIC8vIFNvcnQgUHJvZHVjdHMgYnkgbGVhc3QgZXhwZW5zaXZlIC0tPiBkaXNjb3VudCBhZ2FpbnN0IGxvd2VzdCBjb3N0IG9ubHkuXG4gICAgY29uc3QgcXVhbGlmaWVkUHJvZHVjdHNCeUxlYXN0Q29zdCA9IHF1YWxpZmllZFByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlQSA9IGEucHJpY2UuZmluZCgob2JqKSA9PiAob2JqLmN1cnJlbmN5ID0gY3VycmVuY3kpKTtcbiAgICAgIGNvbnN0IHByaWNlQiA9IGIucHJpY2UuZmluZCgob2JqKSA9PiAob2JqLmN1cnJlbmN5ID0gY3VycmVuY3kpKTtcbiAgICAgIGlmIChwcmljZUEgPT09IHVuZGVmaW5lZCB8fCBwcmljZUIgPT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmljaW5nIGlzIGVycm9uZW91cycpO1xuICAgICAgcmV0dXJuIHByaWNlQS5hbW91bnQgLSBwcmljZUIuYW1vdW50O1xuICAgIH0pO1xuICAgIHJldHVybiBxdWFsaWZpZWRQcm9kdWN0c0J5TGVhc3RDb3N0O1xuICB9XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ2FsY3VsYXRlIGRpc2NvdW50IG9uIGFycmF5IG9mIHByb2R1Y3RzXG4gICAqIEBwYXJhbSB7QXJyYXk8UHJvZHVjdD59IHF1YWxpZmllZFByb2R1Y3RzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW5jeVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBkaXNjb3VudCB2YWx1ZSBhZ2Fpc3QgcXVhbGlmeWluZyBwcm9kdWN0c1xuICAgKi9cbiAgY2FsY3VsYXRlRGlzY291bnQoXG4gICAgcXVhbGlmaWVkUHJvZHVjdHM6IEFycmF5PFByb2R1Y3Q+LFxuICAgIGN1cnJlbmN5OiBzdHJpbmdcbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCBkaXNjb3VudCA9IHF1YWxpZmllZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0ucHJpY2UuZmluZCgob2JqKSA9PiAob2JqLmN1cnJlbmN5ID0gY3VycmVuY3kpKTtcbiAgICAgIGFjYyArPSBwcmljZSA/IHByaWNlLmFtb3VudCAqIHRoaXMuZGlzY291bnQgOiAwO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gZGlzY291bnQ7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBcHBseSBkaXNjb3VudCB0byBnaXZlbiBpdGVtc1xuICAgKiBAcGFyYW0ge0FycmF5PFByb2R1Y3Q+fSBpdGVtc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBkaXNjb3VudCB2YWx1ZSBhZ2Fpc3QgcXVhbGlmaWVkIHByb2R1Y3RzXG4gICAqL1xuICBhcHBseURpc2NvdW50KGl0ZW1zOiBBcnJheTxQcm9kdWN0PiwgY3VycmVuY3k6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgcXVhbGlmaWVkUHJvZHVjdHMgPSB0aGlzLmdldFF1YWxpZmllZFByb2R1Y3RzKGl0ZW1zLCBjdXJyZW5jeSk7XG4gICAgLy8gVG9vIGZldyBwcm9kdWN0cyBmb3IgZGlzY291bnQgdG8gYXBwbHksIHJldHVybiAwIGRpc2NvdW50IGZvciB0aGlzIHByb21vdGlvblxuICAgIGlmIChpdGVtcy5sZW5ndGggPCB0aGlzLnF1YWxpZnlpbmdQcm9kdWN0Q291bnQpIHJldHVybiAwO1xuICAgIC8vIENoZWNrIGlmIHF1YWxpZmllZCBwcm9kdWN0cyBkaXZpZGVzIHVwIGJ5IHF1YWxpZnlpbmdQcm9kdWN0Q291bnRcbiAgICBjb25zdCByZW1haW5kZXIgPSBxdWFsaWZpZWRQcm9kdWN0cy5sZW5ndGggJSB0aGlzLnF1YWxpZnlpbmdQcm9kdWN0Q291bnQ7XG4gICAgLy8gSWYgbm8gcmVtYWluZGVyIGFwcGx5IGRpc2NvdW50IHRvIGFsbCBvZiB0aGUgcHJvZHVjdHMgaW4gcXVhbGlmaWVkUHJvZHVjdHNcbiAgICBpZiAocmVtYWluZGVyID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVEaXNjb3VudChxdWFsaWZpZWRQcm9kdWN0cywgY3VycmVuY3kpO1xuICAgIH1cbiAgICAvLyBSZW1haW5kZXIsIGNhbGN1bGF0ZSBkaXNjb3VudCBhZ2FpbnN0IHdoYXQgaXMgZGl2aXNibGUgYW5kIHBlcmZvcm0gcmVjdXJzaW9uIG9uIHJlbWFpbmRlclxuICAgIGVsc2Uge1xuICAgICAgLy8gU3BsaXQgYXJyYXkgaW50byBudW1iZXIgb2YgcHJvZHVjdHMgZGl2aXNpYmxlIGJ5IHByb21vdGlvblxuICAgICAgY29uc3QgZGlzY291bnRhYmxlUHJvZHVjdHMgPSBxdWFsaWZpZWRQcm9kdWN0cy5zcGxpY2UoXG4gICAgICAgIDAsXG4gICAgICAgIHF1YWxpZmllZFByb2R1Y3RzLmxlbmd0aCAtIHJlbWFpbmRlclxuICAgICAgKTtcbiAgICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBvbiBwcm9tb3Rpb24tYXBwbGljYWJsZSBwcm9kdWN0c1xuICAgICAgY29uc3QgZGlzY291bnQgPSB0aGlzLmNhbGN1bGF0ZURpc2NvdW50KGRpc2NvdW50YWJsZVByb2R1Y3RzLCBjdXJyZW5jeSk7XG4gICAgICAvLyBUYWtlIHJlbWFpbmRlciBvZiBhcnJheSwgY2hlY2sgb3RoZXIgcHJvbW90aW9ucyBmb3IgZGlzY291bnRzIHZpYSBQcm9tb3Rpb25PcHRpbWlzZXJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1Byb2R1Y3RzID0gcXVhbGlmaWVkUHJvZHVjdHMuc3BsaWNlKC1yZW1haW5kZXIpO1xuICAgICAgY29uc3QgcmVjdXJzaW9uRGlzY291bnQgPSBQcm9tb3Rpb25PcHRpbWlzZXIuZ2V0QmVzdERpc2NvdW50KFxuICAgICAgICByZW1haW5pbmdQcm9kdWN0cyxcbiAgICAgICAgY3VycmVuY3lcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGlzY291bnQgKyByZWN1cnNpb25EaXNjb3VudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==