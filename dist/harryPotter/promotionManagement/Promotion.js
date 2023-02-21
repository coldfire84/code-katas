"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion = void 0;
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
     * @description Checks supplied items against given Promotion and returns products that
     *   fall in-scope of/ qualified for promotion.
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
}
exports.Promotion = Promotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW90aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL3Byb21vdGlvbk1hbmFnZW1lbnQvUHJvbW90aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBOztHQUVHO0FBQ0gsTUFBc0IsU0FBUztJQUs3Qjs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxPQUFnQjtRQUNsQyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCxvQkFBb0IsQ0FDbEIsS0FBcUIsRUFDckIsUUFBZ0I7UUFFaEIsK0VBQStFO1FBQy9FLE1BQU0saUJBQWlCLEdBQW1CLElBQUksQ0FBQywyQkFBMkI7WUFDeEUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFtQixFQUFFLElBQWEsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7b0JBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztvQkFDckQsT0FBTyxHQUFHLENBQUM7WUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBRSxJQUFhLEVBQUUsRUFBRTtnQkFDbEQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO29CQUNoQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDbkQsQ0FBQyxDQUFDLEdBQUc7d0JBQ0wsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7O29CQUNoQixPQUFPLEdBQUcsQ0FBQztZQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDWCwwRUFBMEU7UUFDMUUsTUFBTSw0QkFBNEIsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLFNBQVM7Z0JBQzlDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sNEJBQTRCLENBQUM7SUFDdEMsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0gsaUJBQWlCLENBQ2YsaUJBQWlDLEVBQ2pDLFFBQWdCO1FBRWhCLE1BQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN0RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUEvREQsOEJBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJuYWwgSW1wb3J0c1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3RNYW5hZ2VtZW50L1Byb2R1Y3QnO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gUHJvbW90aW9uLCBhYnN0cmFjdC8gYmFzZSBjbGFzcy4gUHJvbW90aW9uIE1hbmFnZW1lbnQgQi9DLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJvbW90aW9uIHtcbiAgcHJvdGVjdGVkIGRpc2NvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBxdWFsaWZ5aW5nUHJvZHVjdHM6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyBxdWFsaWZ5aW5nUHJvZHVjdENvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBhbGxvd011bHRpcGxlc09mU2FtZVByb2R1Y3Q6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgcHJvZHVjdCBxdWFsaWZpZXMgZm9yIGRpc2NvdW50XG4gICAqIEBwYXJhbSB7UHJvZHVjdH0gcHJvZHVjdFxuICAgKi9cbiAgaXNRdWFsaWZ5aW5nUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlcy5jYWxsKHRoaXMucXVhbGlmeWluZ1Byb2R1Y3RzLCBwcm9kdWN0LmlkKTtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrcyBzdXBwbGllZCBpdGVtcyBhZ2FpbnN0IGdpdmVuIFByb21vdGlvbiBhbmQgcmV0dXJucyBwcm9kdWN0cyB0aGF0XG4gICAqICAgZmFsbCBpbi1zY29wZSBvZi8gcXVhbGlmaWVkIGZvciBwcm9tb3Rpb24uXG4gICAqIEBwYXJhbSB7QXJyYXk8UHJvZHVjdD59IGl0ZW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW5jeVxuICAgKiBAcmV0dXJucyB7QXJyYXk8UHJvZHVjdD59XG4gICAqL1xuICBnZXRRdWFsaWZpZWRQcm9kdWN0cyhcbiAgICBpdGVtczogQXJyYXk8UHJvZHVjdD4sXG4gICAgY3VycmVuY3k6IHN0cmluZ1xuICApOiBBcnJheTxQcm9kdWN0PiB7XG4gICAgLy8gRmlsdGVyIHVuaXF1ZSBwcm9kdWN0cywgZGVwZW5kaW5nIG9uIHByb21vdGlvbiBgYWxsb3dNdWx0aXBsZXNPZlNhbWVQcm9kdWN0YFxuICAgIGNvbnN0IHF1YWxpZmllZFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PiA9IHRoaXMuYWxsb3dNdWx0aXBsZXNPZlNhbWVQcm9kdWN0XG4gICAgICA/IGl0ZW1zLnJlZHVjZSgoYXJyOiBBcnJheTxQcm9kdWN0PiwgaXRlbTogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUXVhbGlmeWluZ1Byb2R1Y3QoaXRlbSkpIHJldHVybiBbLi4uYXJyLCBpdGVtXTtcbiAgICAgICAgICBlbHNlIHJldHVybiBhcnI7XG4gICAgICAgIH0sIFtdKVxuICAgICAgOiBpdGVtcy5yZWR1Y2UoKGFycjogQXJyYXk8UHJvZHVjdD4sIGl0ZW06IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1F1YWxpZnlpbmdQcm9kdWN0KGl0ZW0pKVxuICAgICAgICAgICAgcmV0dXJuIGFyci5zb21lKChvYmo6IFByb2R1Y3QpID0+IG9iai5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgICAgICAgPyBhcnJcbiAgICAgICAgICAgICAgOiBbLi4uYXJyLCBpdGVtXTtcbiAgICAgICAgICBlbHNlIHJldHVybiBhcnI7XG4gICAgICAgIH0sIFtdKTtcbiAgICAvLyBTb3J0IFByb2R1Y3RzIGJ5IGxlYXN0IGV4cGVuc2l2ZSAtLT4gZGlzY291bnQgYWdhaW5zdCBsb3dlc3QgY29zdCBvbmx5LlxuICAgIGNvbnN0IHF1YWxpZmllZFByb2R1Y3RzQnlMZWFzdENvc3QgPSBxdWFsaWZpZWRQcm9kdWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBwcmljZUEgPSBhLnByaWNlLmZpbmQoKG9iaikgPT4gKG9iai5jdXJyZW5jeSA9IGN1cnJlbmN5KSk7XG4gICAgICBjb25zdCBwcmljZUIgPSBiLnByaWNlLmZpbmQoKG9iaikgPT4gKG9iai5jdXJyZW5jeSA9IGN1cnJlbmN5KSk7XG4gICAgICBpZiAocHJpY2VBID09PSB1bmRlZmluZWQgfHwgcHJpY2VCID09PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJpY2luZyBpcyBlcnJvbmVvdXMnKTtcbiAgICAgIHJldHVybiBwcmljZUEuYW1vdW50IC0gcHJpY2VCLmFtb3VudDtcbiAgICB9KTtcbiAgICByZXR1cm4gcXVhbGlmaWVkUHJvZHVjdHNCeUxlYXN0Q29zdDtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENhbGN1bGF0ZSBkaXNjb3VudCBvbiBhcnJheSBvZiBwcm9kdWN0c1xuICAgKiBAcGFyYW0ge0FycmF5PFByb2R1Y3Q+fSBxdWFsaWZpZWRQcm9kdWN0c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVuY3lcbiAgICogQHJldHVybnMge251bWJlcn0gZGlzY291bnQgdmFsdWUgYWdhaXN0IHF1YWxpZnlpbmcgcHJvZHVjdHNcbiAgICovXG4gIGNhbGN1bGF0ZURpc2NvdW50KFxuICAgIHF1YWxpZmllZFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PixcbiAgICBjdXJyZW5jeTogc3RyaW5nXG4gICk6IG51bWJlciB7XG4gICAgY29uc3QgZGlzY291bnQgPSBxdWFsaWZpZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnByaWNlLmZpbmQoKG9iaikgPT4gKG9iai5jdXJyZW5jeSA9IGN1cnJlbmN5KSk7XG4gICAgICBhY2MgKz0gcHJpY2UgPyBwcmljZS5hbW91bnQgKiB0aGlzLmRpc2NvdW50IDogMDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIGRpc2NvdW50O1xuICB9XG59XG4iXX0=