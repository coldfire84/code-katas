"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionOptimiser = void 0;
const BuyThreeHarryPotterBooksSave10Percent_1 = require("./BuyThreeHarryPotterBooksSave10Percent");
const BuyTwoHarryPotterBooksSave5Percent_1 = require("./BuyTwoHarryPotterBooksSave5Percent");
const BuyFourHarryPotterBooksSave20Percent_1 = require("./BuyFourHarryPotterBooksSave20Percent");
const BuyFiveHarryPotterBooksSave25Percent_1 = require("./BuyFiveHarryPotterBooksSave25Percent");
/**
 * @description Promotion Optimiser, used to find best promotion. Uses Optimiser Pattern.
 */
class PromotionOptimiser {
    /**
     * @description Enum for all Promotions
     * @return {Array<Promotion>}
     */
    static promotions() {
        return [
            new BuyTwoHarryPotterBooksSave5Percent_1.BuyTwoHarryPotterBooksSave5Percent(),
            new BuyThreeHarryPotterBooksSave10Percent_1.BuyThreeHarryPotterBooksSave10Percent(),
            new BuyFourHarryPotterBooksSave20Percent_1.BuyFourHarryPotterBooksSave20Percent(),
            new BuyFiveHarryPotterBooksSave25Percent_1.BuyFiveHarryPotterBooksSave25Percent(),
        ];
    }
    /**
     * @description Iterates through each promotion and works out best discount available against basket
     * @param {Array<Product>} items
     * @return {number}
     */
    static getBestDiscount(items, currency) {
        let bestResult = {
            promotionName: '',
            discount: 0,
        };
        // Iterate through promotions to calculate best discount
        this.promotions().map((promotion) => {
            const qualifiedProducts = promotion.getQualifiedProducts(items, currency);
            // Too few products for discount to apply, skip this promotion
            if (items.length < promotion.qualifyingProductCount)
                return;
            // Check if qualified products divides up by qualifyingProductCount
            const remainder = qualifiedProducts.length % promotion.qualifyingProductCount;
            // If no remainder apply discount to all of the products in qualifiedProducts
            if (remainder === 0) {
                const discount = promotion.calculateDiscount(qualifiedProducts, currency);
                if (discount > bestResult.discount)
                    bestResult = {
                        promotionName: promotion.constructor.name,
                        discount,
                    };
            }
            // Remainder, calculate discount against what is divisble and perform recursion on remainder
            else {
                // Split basket qualified products into number divisible by promotion
                const discountableProducts = qualifiedProducts.splice(0, qualifiedProducts.length - remainder);
                // Calculate discount on basket qualified products
                const partialDiscount = promotion.calculateDiscount(discountableProducts, currency);
                // Take remainder of basket qualified products, check other promotions for discounts via PromotionOptimiser/ recursion
                const remainingProducts = qualifiedProducts.splice(-remainder);
                const recursionDiscount = PromotionOptimiser.getBestDiscount(remainingProducts, currency);
                // Tally-up partial and recursion discount
                const discount = partialDiscount + recursionDiscount;
                if (discount > bestResult.discount)
                    bestResult = {
                        promotionName: promotion.constructor.name,
                        discount,
                    };
            }
        });
        return bestResult.discount;
    }
}
exports.PromotionOptimiser = PromotionOptimiser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW90aW9uT3B0aW1pc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL3Byb21vdGlvbk1hbmFnZW1lbnQvUHJvbW90aW9uT3B0aW1pc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1HQUFnRztBQUNoRyw2RkFBMEY7QUFDMUYsaUdBQThGO0FBQzlGLGlHQUE4RjtBQUU5Rjs7R0FFRztBQUNILE1BQWEsa0JBQWtCO0lBQzdCOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxVQUFVO1FBQ2YsT0FBTztZQUNMLElBQUksdUVBQWtDLEVBQUU7WUFDeEMsSUFBSSw2RUFBcUMsRUFBRTtZQUMzQyxJQUFJLDJFQUFvQyxFQUFFO1lBQzFDLElBQUksMkVBQW9DLEVBQUU7U0FDM0MsQ0FBQztJQUNKLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFxQixFQUFFLFFBQWdCO1FBQzVELElBQUksVUFBVSxHQUdWO1lBQ0YsYUFBYSxFQUFFLEVBQUU7WUFDakIsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO1FBQ0Ysd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQyxNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDMUUsOERBQThEO1lBQzlELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsc0JBQXNCO2dCQUFFLE9BQU87WUFDNUQsbUVBQW1FO1lBQ25FLE1BQU0sU0FBUyxHQUNiLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsc0JBQXNCLENBQUM7WUFDOUQsNkVBQTZFO1lBQzdFLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUMxQyxpQkFBaUIsRUFDakIsUUFBUSxDQUNULENBQUM7Z0JBQ0YsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVE7b0JBQ2hDLFVBQVUsR0FBRzt3QkFDWCxhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJO3dCQUN6QyxRQUFRO3FCQUNULENBQUM7YUFDTDtZQUNELDRGQUE0RjtpQkFDdkY7Z0JBQ0gscUVBQXFFO2dCQUNyRSxNQUFNLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FDbkQsQ0FBQyxFQUNELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQ3JDLENBQUM7Z0JBQ0Ysa0RBQWtEO2dCQUNsRCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQ2pELG9CQUFvQixFQUNwQixRQUFRLENBQ1QsQ0FBQztnQkFDRixzSEFBc0g7Z0JBQ3RILE1BQU0saUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9ELE1BQU0saUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxDQUMxRCxpQkFBaUIsRUFDakIsUUFBUSxDQUNULENBQUM7Z0JBQ0YsMENBQTBDO2dCQUMxQyxNQUFNLFFBQVEsR0FBRyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ3JELElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRO29CQUNoQyxVQUFVLEdBQUc7d0JBQ1gsYUFBYSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSTt3QkFDekMsUUFBUTtxQkFDVCxDQUFDO2FBQ0w7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUEzRUQsZ0RBMkVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJuYWwgSW1wb3J0c1xuaW1wb3J0IHsgUHJvbW90aW9uIH0gZnJvbSAnLi9Qcm9tb3Rpb24nO1xuaW1wb3J0IHsgQnV5VGhyZWVIYXJyeVBvdHRlckJvb2tzU2F2ZTEwUGVyY2VudCB9IGZyb20gJy4vQnV5VGhyZWVIYXJyeVBvdHRlckJvb2tzU2F2ZTEwUGVyY2VudCc7XG5pbXBvcnQgeyBCdXlUd29IYXJyeVBvdHRlckJvb2tzU2F2ZTVQZXJjZW50IH0gZnJvbSAnLi9CdXlUd29IYXJyeVBvdHRlckJvb2tzU2F2ZTVQZXJjZW50JztcbmltcG9ydCB7IEJ1eUZvdXJIYXJyeVBvdHRlckJvb2tzU2F2ZTIwUGVyY2VudCB9IGZyb20gJy4vQnV5Rm91ckhhcnJ5UG90dGVyQm9va3NTYXZlMjBQZXJjZW50JztcbmltcG9ydCB7IEJ1eUZpdmVIYXJyeVBvdHRlckJvb2tzU2F2ZTI1UGVyY2VudCB9IGZyb20gJy4vQnV5Rml2ZUhhcnJ5UG90dGVyQm9va3NTYXZlMjVQZXJjZW50JztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0TWFuYWdlbWVudC9Qcm9kdWN0Jztcbi8qKlxuICogQGRlc2NyaXB0aW9uIFByb21vdGlvbiBPcHRpbWlzZXIsIHVzZWQgdG8gZmluZCBiZXN0IHByb21vdGlvbi4gVXNlcyBPcHRpbWlzZXIgUGF0dGVybi5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb21vdGlvbk9wdGltaXNlciB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRW51bSBmb3IgYWxsIFByb21vdGlvbnNcbiAgICogQHJldHVybiB7QXJyYXk8UHJvbW90aW9uPn1cbiAgICovXG4gIHN0YXRpYyBwcm9tb3Rpb25zKCk6IEFycmF5PFByb21vdGlvbj4ge1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgQnV5VHdvSGFycnlQb3R0ZXJCb29rc1NhdmU1UGVyY2VudCgpLFxuICAgICAgbmV3IEJ1eVRocmVlSGFycnlQb3R0ZXJCb29rc1NhdmUxMFBlcmNlbnQoKSxcbiAgICAgIG5ldyBCdXlGb3VySGFycnlQb3R0ZXJCb29rc1NhdmUyMFBlcmNlbnQoKSxcbiAgICAgIG5ldyBCdXlGaXZlSGFycnlQb3R0ZXJCb29rc1NhdmUyNVBlcmNlbnQoKSxcbiAgICBdO1xuICB9XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHByb21vdGlvbiBhbmQgd29ya3Mgb3V0IGJlc3QgZGlzY291bnQgYXZhaWxhYmxlIGFnYWluc3QgYmFza2V0XG4gICAqIEBwYXJhbSB7QXJyYXk8UHJvZHVjdD59IGl0ZW1zXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBnZXRCZXN0RGlzY291bnQoaXRlbXM6IEFycmF5PFByb2R1Y3Q+LCBjdXJyZW5jeTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgYmVzdFJlc3VsdDoge1xuICAgICAgcHJvbW90aW9uTmFtZTogc3RyaW5nO1xuICAgICAgZGlzY291bnQ6IG51bWJlcjtcbiAgICB9ID0ge1xuICAgICAgcHJvbW90aW9uTmFtZTogJycsXG4gICAgICBkaXNjb3VudDogMCxcbiAgICB9O1xuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBwcm9tb3Rpb25zIHRvIGNhbGN1bGF0ZSBiZXN0IGRpc2NvdW50XG4gICAgdGhpcy5wcm9tb3Rpb25zKCkubWFwKChwcm9tb3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZFByb2R1Y3RzID0gcHJvbW90aW9uLmdldFF1YWxpZmllZFByb2R1Y3RzKGl0ZW1zLCBjdXJyZW5jeSk7XG4gICAgICAvLyBUb28gZmV3IHByb2R1Y3RzIGZvciBkaXNjb3VudCB0byBhcHBseSwgc2tpcCB0aGlzIHByb21vdGlvblxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA8IHByb21vdGlvbi5xdWFsaWZ5aW5nUHJvZHVjdENvdW50KSByZXR1cm47XG4gICAgICAvLyBDaGVjayBpZiBxdWFsaWZpZWQgcHJvZHVjdHMgZGl2aWRlcyB1cCBieSBxdWFsaWZ5aW5nUHJvZHVjdENvdW50XG4gICAgICBjb25zdCByZW1haW5kZXIgPVxuICAgICAgICBxdWFsaWZpZWRQcm9kdWN0cy5sZW5ndGggJSBwcm9tb3Rpb24ucXVhbGlmeWluZ1Byb2R1Y3RDb3VudDtcbiAgICAgIC8vIElmIG5vIHJlbWFpbmRlciBhcHBseSBkaXNjb3VudCB0byBhbGwgb2YgdGhlIHByb2R1Y3RzIGluIHF1YWxpZmllZFByb2R1Y3RzXG4gICAgICBpZiAocmVtYWluZGVyID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gcHJvbW90aW9uLmNhbGN1bGF0ZURpc2NvdW50KFxuICAgICAgICAgIHF1YWxpZmllZFByb2R1Y3RzLFxuICAgICAgICAgIGN1cnJlbmN5XG4gICAgICAgICk7XG4gICAgICAgIGlmIChkaXNjb3VudCA+IGJlc3RSZXN1bHQuZGlzY291bnQpXG4gICAgICAgICAgYmVzdFJlc3VsdCA9IHtcbiAgICAgICAgICAgIHByb21vdGlvbk5hbWU6IHByb21vdGlvbi5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgZGlzY291bnQsXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbWFpbmRlciwgY2FsY3VsYXRlIGRpc2NvdW50IGFnYWluc3Qgd2hhdCBpcyBkaXZpc2JsZSBhbmQgcGVyZm9ybSByZWN1cnNpb24gb24gcmVtYWluZGVyXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gU3BsaXQgYmFza2V0IHF1YWxpZmllZCBwcm9kdWN0cyBpbnRvIG51bWJlciBkaXZpc2libGUgYnkgcHJvbW90aW9uXG4gICAgICAgIGNvbnN0IGRpc2NvdW50YWJsZVByb2R1Y3RzID0gcXVhbGlmaWVkUHJvZHVjdHMuc3BsaWNlKFxuICAgICAgICAgIDAsXG4gICAgICAgICAgcXVhbGlmaWVkUHJvZHVjdHMubGVuZ3RoIC0gcmVtYWluZGVyXG4gICAgICAgICk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBvbiBiYXNrZXQgcXVhbGlmaWVkIHByb2R1Y3RzXG4gICAgICAgIGNvbnN0IHBhcnRpYWxEaXNjb3VudCA9IHByb21vdGlvbi5jYWxjdWxhdGVEaXNjb3VudChcbiAgICAgICAgICBkaXNjb3VudGFibGVQcm9kdWN0cyxcbiAgICAgICAgICBjdXJyZW5jeVxuICAgICAgICApO1xuICAgICAgICAvLyBUYWtlIHJlbWFpbmRlciBvZiBiYXNrZXQgcXVhbGlmaWVkIHByb2R1Y3RzLCBjaGVjayBvdGhlciBwcm9tb3Rpb25zIGZvciBkaXNjb3VudHMgdmlhIFByb21vdGlvbk9wdGltaXNlci8gcmVjdXJzaW9uXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1Byb2R1Y3RzID0gcXVhbGlmaWVkUHJvZHVjdHMuc3BsaWNlKC1yZW1haW5kZXIpO1xuICAgICAgICBjb25zdCByZWN1cnNpb25EaXNjb3VudCA9IFByb21vdGlvbk9wdGltaXNlci5nZXRCZXN0RGlzY291bnQoXG4gICAgICAgICAgcmVtYWluaW5nUHJvZHVjdHMsXG4gICAgICAgICAgY3VycmVuY3lcbiAgICAgICAgKTtcbiAgICAgICAgLy8gVGFsbHktdXAgcGFydGlhbCBhbmQgcmVjdXJzaW9uIGRpc2NvdW50XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gcGFydGlhbERpc2NvdW50ICsgcmVjdXJzaW9uRGlzY291bnQ7XG4gICAgICAgIGlmIChkaXNjb3VudCA+IGJlc3RSZXN1bHQuZGlzY291bnQpXG4gICAgICAgICAgYmVzdFJlc3VsdCA9IHtcbiAgICAgICAgICAgIHByb21vdGlvbk5hbWU6IHByb21vdGlvbi5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgZGlzY291bnQsXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYmVzdFJlc3VsdC5kaXNjb3VudDtcbiAgfVxufVxuIl19