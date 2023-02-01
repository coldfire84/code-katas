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
     * @param {Promotion} promotion
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW90aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL3Byb21vdGlvbk1hbmFnZW1lbnQvUHJvbW90aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBOztHQUVHO0FBQ0gsTUFBc0IsU0FBUztJQUs3Qjs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxPQUFnQjtRQUNsQyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRDs7Ozs7OztPQU9HO0lBQ0gsb0JBQW9CLENBQ2xCLEtBQXFCLEVBQ3JCLFFBQWdCO1FBRWhCLCtFQUErRTtRQUMvRSxNQUFNLGlCQUFpQixHQUFtQixJQUFJLENBQUMsMkJBQTJCO1lBQ3hFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBRSxJQUFhLEVBQUUsRUFBRTtnQkFDbEQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO29CQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7b0JBQ3JELE9BQU8sR0FBRyxDQUFDO1lBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQW1CLEVBQUUsSUFBYSxFQUFFLEVBQUU7Z0JBQ2xELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztvQkFDaEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ25ELENBQUMsQ0FBQyxHQUFHO3dCQUNMLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztvQkFDaEIsT0FBTyxHQUFHLENBQUM7WUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsMEVBQTBFO1FBQzFFLE1BQU0sNEJBQTRCLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25FLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxTQUFTO2dCQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDMUMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLDRCQUE0QixDQUFDO0lBQ3RDLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILGlCQUFpQixDQUNmLGlCQUFpQyxFQUNqQyxRQUFnQjtRQUVoQixNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBaEVELDhCQWdFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVybmFsIEltcG9ydHNcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0TWFuYWdlbWVudC9Qcm9kdWN0Jztcbi8qKlxuICogQGRlc2NyaXB0aW9uIFByb21vdGlvbiwgYWJzdHJhY3QvIGJhc2UgY2xhc3MuIFByb21vdGlvbiBNYW5hZ2VtZW50IEIvQy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb21vdGlvbiB7XG4gIHByb3RlY3RlZCBkaXNjb3VudDogbnVtYmVyO1xuICBwdWJsaWMgcXVhbGlmeWluZ1Byb2R1Y3RzOiBBcnJheTxzdHJpbmc+O1xuICBwdWJsaWMgcXVhbGlmeWluZ1Byb2R1Y3RDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgYWxsb3dNdWx0aXBsZXNPZlNhbWVQcm9kdWN0OiBib29sZWFuO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIHByb2R1Y3QgcXVhbGlmaWVzIGZvciBkaXNjb3VudFxuICAgKiBAcGFyYW0ge1Byb2R1Y3R9IHByb2R1Y3RcbiAgICovXG4gIGlzUXVhbGlmeWluZ1Byb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMuY2FsbCh0aGlzLnF1YWxpZnlpbmdQcm9kdWN0cywgcHJvZHVjdC5pZCk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVja3Mgc3VwcGxpZWQgaXRlbXMgYWdhaW5zdCBnaXZlbiBQcm9tb3Rpb24gYW5kIHJldHVybnMgcHJvZHVjdHMgdGhhdFxuICAgKiAgIGZhbGwgaW4tc2NvcGUgb2YvIHF1YWxpZmllZCBmb3IgcHJvbW90aW9uLlxuICAgKiBAcGFyYW0ge0FycmF5PFByb2R1Y3Q+fSBpdGVtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVuY3lcbiAgICogQHBhcmFtIHtQcm9tb3Rpb259IHByb21vdGlvblxuICAgKiBAcmV0dXJucyB7QXJyYXk8UHJvZHVjdD59XG4gICAqL1xuICBnZXRRdWFsaWZpZWRQcm9kdWN0cyhcbiAgICBpdGVtczogQXJyYXk8UHJvZHVjdD4sXG4gICAgY3VycmVuY3k6IHN0cmluZ1xuICApOiBBcnJheTxQcm9kdWN0PiB7XG4gICAgLy8gRmlsdGVyIHVuaXF1ZSBwcm9kdWN0cywgZGVwZW5kaW5nIG9uIHByb21vdGlvbiBgYWxsb3dNdWx0aXBsZXNPZlNhbWVQcm9kdWN0YFxuICAgIGNvbnN0IHF1YWxpZmllZFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PiA9IHRoaXMuYWxsb3dNdWx0aXBsZXNPZlNhbWVQcm9kdWN0XG4gICAgICA/IGl0ZW1zLnJlZHVjZSgoYXJyOiBBcnJheTxQcm9kdWN0PiwgaXRlbTogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzUXVhbGlmeWluZ1Byb2R1Y3QoaXRlbSkpIHJldHVybiBbLi4uYXJyLCBpdGVtXTtcbiAgICAgICAgICBlbHNlIHJldHVybiBhcnI7XG4gICAgICAgIH0sIFtdKVxuICAgICAgOiBpdGVtcy5yZWR1Y2UoKGFycjogQXJyYXk8UHJvZHVjdD4sIGl0ZW06IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1F1YWxpZnlpbmdQcm9kdWN0KGl0ZW0pKVxuICAgICAgICAgICAgcmV0dXJuIGFyci5zb21lKChvYmo6IFByb2R1Y3QpID0+IG9iai5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgICAgICAgPyBhcnJcbiAgICAgICAgICAgICAgOiBbLi4uYXJyLCBpdGVtXTtcbiAgICAgICAgICBlbHNlIHJldHVybiBhcnI7XG4gICAgICAgIH0sIFtdKTtcbiAgICAvLyBTb3J0IFByb2R1Y3RzIGJ5IGxlYXN0IGV4cGVuc2l2ZSAtLT4gZGlzY291bnQgYWdhaW5zdCBsb3dlc3QgY29zdCBvbmx5LlxuICAgIGNvbnN0IHF1YWxpZmllZFByb2R1Y3RzQnlMZWFzdENvc3QgPSBxdWFsaWZpZWRQcm9kdWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBwcmljZUEgPSBhLnByaWNlLmZpbmQoKG9iaikgPT4gKG9iai5jdXJyZW5jeSA9IGN1cnJlbmN5KSk7XG4gICAgICBjb25zdCBwcmljZUIgPSBiLnByaWNlLmZpbmQoKG9iaikgPT4gKG9iai5jdXJyZW5jeSA9IGN1cnJlbmN5KSk7XG4gICAgICBpZiAocHJpY2VBID09PSB1bmRlZmluZWQgfHwgcHJpY2VCID09PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJpY2luZyBpcyBlcnJvbmVvdXMnKTtcbiAgICAgIHJldHVybiBwcmljZUEuYW1vdW50IC0gcHJpY2VCLmFtb3VudDtcbiAgICB9KTtcbiAgICByZXR1cm4gcXVhbGlmaWVkUHJvZHVjdHNCeUxlYXN0Q29zdDtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENhbGN1bGF0ZSBkaXNjb3VudCBvbiBhcnJheSBvZiBwcm9kdWN0c1xuICAgKiBAcGFyYW0ge0FycmF5PFByb2R1Y3Q+fSBxdWFsaWZpZWRQcm9kdWN0c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVuY3lcbiAgICogQHJldHVybnMge251bWJlcn0gZGlzY291bnQgdmFsdWUgYWdhaXN0IHF1YWxpZnlpbmcgcHJvZHVjdHNcbiAgICovXG4gIGNhbGN1bGF0ZURpc2NvdW50KFxuICAgIHF1YWxpZmllZFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PixcbiAgICBjdXJyZW5jeTogc3RyaW5nXG4gICk6IG51bWJlciB7XG4gICAgY29uc3QgZGlzY291bnQgPSBxdWFsaWZpZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnByaWNlLmZpbmQoKG9iaikgPT4gKG9iai5jdXJyZW5jeSA9IGN1cnJlbmN5KSk7XG4gICAgICBhY2MgKz0gcHJpY2UgPyBwcmljZS5hbW91bnQgKiB0aGlzLmRpc2NvdW50IDogMDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIGRpc2NvdW50O1xuICB9XG59XG4iXX0=