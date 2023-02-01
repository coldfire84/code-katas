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
        // Create default result, used in comparing results from each Promotion Strategy
        let result = {
            promotionNames: [],
            totalDiscount: 0,
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
                if (discount > result.totalDiscount)
                    result = {
                        promotionNames: [promotion.constructor.name],
                        totalDiscount: discount,
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
                const discount = partialDiscount + recursionDiscount.totalDiscount;
                if (discount > result.totalDiscount)
                    result = {
                        promotionNames: [
                            promotion.constructor.name,
                            ...recursionDiscount.promotionNames,
                        ],
                        totalDiscount: discount,
                    };
            }
        });
        return result;
    }
}
exports.PromotionOptimiser = PromotionOptimiser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW90aW9uT3B0aW1pc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL3Byb21vdGlvbk1hbmFnZW1lbnQvUHJvbW90aW9uT3B0aW1pc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1HQUFnRztBQUNoRyw2RkFBMEY7QUFDMUYsaUdBQThGO0FBQzlGLGlHQUE4RjtBQVM5Rjs7R0FFRztBQUNILE1BQWEsa0JBQWtCO0lBQzdCOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxVQUFVO1FBQ2YsT0FBTztZQUNMLElBQUksdUVBQWtDLEVBQUU7WUFDeEMsSUFBSSw2RUFBcUMsRUFBRTtZQUMzQyxJQUFJLDJFQUFvQyxFQUFFO1lBQzFDLElBQUksMkVBQW9DLEVBQUU7U0FDM0MsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLGVBQWUsQ0FDcEIsS0FBcUIsRUFDckIsUUFBZ0I7UUFFaEIsZ0ZBQWdGO1FBQ2hGLElBQUksTUFBTSxHQUE2QjtZQUNyQyxjQUFjLEVBQUUsRUFBRTtZQUNsQixhQUFhLEVBQUUsQ0FBQztTQUNqQixDQUFDO1FBQ0Ysd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQyxNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDMUUsOERBQThEO1lBQzlELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsc0JBQXNCO2dCQUFFLE9BQU87WUFDNUQsbUVBQW1FO1lBQ25FLE1BQU0sU0FBUyxHQUNiLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsc0JBQXNCLENBQUM7WUFDOUQsNkVBQTZFO1lBQzdFLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUMxQyxpQkFBaUIsRUFDakIsUUFBUSxDQUNULENBQUM7Z0JBQ0YsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWE7b0JBQ2pDLE1BQU0sR0FBRzt3QkFDUCxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDNUMsYUFBYSxFQUFFLFFBQVE7cUJBQ3hCLENBQUM7YUFDTDtZQUNELDRGQUE0RjtpQkFDdkY7Z0JBQ0gscUVBQXFFO2dCQUNyRSxNQUFNLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FDbkQsQ0FBQyxFQUNELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQ3JDLENBQUM7Z0JBQ0Ysa0RBQWtEO2dCQUNsRCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQ2pELG9CQUFvQixFQUNwQixRQUFRLENBQ1QsQ0FBQztnQkFDRixzSEFBc0g7Z0JBQ3RILE1BQU0saUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9ELE1BQU0saUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxDQUMxRCxpQkFBaUIsRUFDakIsUUFBUSxDQUNULENBQUM7Z0JBQ0YsMENBQTBDO2dCQUMxQyxNQUFNLFFBQVEsR0FBRyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDO2dCQUNuRSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYTtvQkFDakMsTUFBTSxHQUFHO3dCQUNQLGNBQWMsRUFBRTs0QkFDZCxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUk7NEJBQzFCLEdBQUcsaUJBQWlCLENBQUMsY0FBYzt5QkFDcEM7d0JBQ0QsYUFBYSxFQUFFLFFBQVE7cUJBQ3hCLENBQUM7YUFDTDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBaEZELGdEQWdGQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVybmFsIEltcG9ydHNcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4vUHJvbW90aW9uJztcbmltcG9ydCB7IEJ1eVRocmVlSGFycnlQb3R0ZXJCb29rc1NhdmUxMFBlcmNlbnQgfSBmcm9tICcuL0J1eVRocmVlSGFycnlQb3R0ZXJCb29rc1NhdmUxMFBlcmNlbnQnO1xuaW1wb3J0IHsgQnV5VHdvSGFycnlQb3R0ZXJCb29rc1NhdmU1UGVyY2VudCB9IGZyb20gJy4vQnV5VHdvSGFycnlQb3R0ZXJCb29rc1NhdmU1UGVyY2VudCc7XG5pbXBvcnQgeyBCdXlGb3VySGFycnlQb3R0ZXJCb29rc1NhdmUyMFBlcmNlbnQgfSBmcm9tICcuL0J1eUZvdXJIYXJyeVBvdHRlckJvb2tzU2F2ZTIwUGVyY2VudCc7XG5pbXBvcnQgeyBCdXlGaXZlSGFycnlQb3R0ZXJCb29rc1NhdmUyNVBlcmNlbnQgfSBmcm9tICcuL0J1eUZpdmVIYXJyeVBvdHRlckJvb2tzU2F2ZTI1UGVyY2VudCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vcHJvZHVjdE1hbmFnZW1lbnQvUHJvZHVjdCc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gSW50ZXJmYWNlIGZvciBQcm9tb3Rpb25PcHRpbWlzZXJcbiAqL1xuaW50ZXJmYWNlIFByb21vdGlvbk9wdGltaXNlclJldHVybiB7XG4gIHByb21vdGlvbk5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICB0b3RhbERpc2NvdW50OiBudW1iZXI7XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBQcm9tb3Rpb24gT3B0aW1pc2VyLCB1c2VkIHRvIGZpbmQgYmVzdCBwcm9tb3Rpb24uIFVzZXMgT3B0aW1pc2VyIFBhdHRlcm4uXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25PcHRpbWlzZXIge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEVudW0gZm9yIGFsbCBQcm9tb3Rpb25zXG4gICAqIEByZXR1cm4ge0FycmF5PFByb21vdGlvbj59XG4gICAqL1xuICBzdGF0aWMgcHJvbW90aW9ucygpOiBBcnJheTxQcm9tb3Rpb24+IHtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEJ1eVR3b0hhcnJ5UG90dGVyQm9va3NTYXZlNVBlcmNlbnQoKSxcbiAgICAgIG5ldyBCdXlUaHJlZUhhcnJ5UG90dGVyQm9va3NTYXZlMTBQZXJjZW50KCksXG4gICAgICBuZXcgQnV5Rm91ckhhcnJ5UG90dGVyQm9va3NTYXZlMjBQZXJjZW50KCksXG4gICAgICBuZXcgQnV5Rml2ZUhhcnJ5UG90dGVyQm9va3NTYXZlMjVQZXJjZW50KCksXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHByb21vdGlvbiBhbmQgd29ya3Mgb3V0IGJlc3QgZGlzY291bnQgYXZhaWxhYmxlIGFnYWluc3QgYmFza2V0XG4gICAqIEBwYXJhbSB7QXJyYXk8UHJvZHVjdD59IGl0ZW1zXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBnZXRCZXN0RGlzY291bnQoXG4gICAgaXRlbXM6IEFycmF5PFByb2R1Y3Q+LFxuICAgIGN1cnJlbmN5OiBzdHJpbmdcbiAgKTogUHJvbW90aW9uT3B0aW1pc2VyUmV0dXJuIHtcbiAgICAvLyBDcmVhdGUgZGVmYXVsdCByZXN1bHQsIHVzZWQgaW4gY29tcGFyaW5nIHJlc3VsdHMgZnJvbSBlYWNoIFByb21vdGlvbiBTdHJhdGVneVxuICAgIGxldCByZXN1bHQ6IFByb21vdGlvbk9wdGltaXNlclJldHVybiA9IHtcbiAgICAgIHByb21vdGlvbk5hbWVzOiBbXSxcbiAgICAgIHRvdGFsRGlzY291bnQ6IDAsXG4gICAgfTtcbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggcHJvbW90aW9ucyB0byBjYWxjdWxhdGUgYmVzdCBkaXNjb3VudFxuICAgIHRoaXMucHJvbW90aW9ucygpLm1hcCgocHJvbW90aW9uKSA9PiB7XG4gICAgICBjb25zdCBxdWFsaWZpZWRQcm9kdWN0cyA9IHByb21vdGlvbi5nZXRRdWFsaWZpZWRQcm9kdWN0cyhpdGVtcywgY3VycmVuY3kpO1xuICAgICAgLy8gVG9vIGZldyBwcm9kdWN0cyBmb3IgZGlzY291bnQgdG8gYXBwbHksIHNraXAgdGhpcyBwcm9tb3Rpb25cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPCBwcm9tb3Rpb24ucXVhbGlmeWluZ1Byb2R1Y3RDb3VudCkgcmV0dXJuO1xuICAgICAgLy8gQ2hlY2sgaWYgcXVhbGlmaWVkIHByb2R1Y3RzIGRpdmlkZXMgdXAgYnkgcXVhbGlmeWluZ1Byb2R1Y3RDb3VudFxuICAgICAgY29uc3QgcmVtYWluZGVyID1cbiAgICAgICAgcXVhbGlmaWVkUHJvZHVjdHMubGVuZ3RoICUgcHJvbW90aW9uLnF1YWxpZnlpbmdQcm9kdWN0Q291bnQ7XG4gICAgICAvLyBJZiBubyByZW1haW5kZXIgYXBwbHkgZGlzY291bnQgdG8gYWxsIG9mIHRoZSBwcm9kdWN0cyBpbiBxdWFsaWZpZWRQcm9kdWN0c1xuICAgICAgaWYgKHJlbWFpbmRlciA9PT0gMCkge1xuICAgICAgICBjb25zdCBkaXNjb3VudCA9IHByb21vdGlvbi5jYWxjdWxhdGVEaXNjb3VudChcbiAgICAgICAgICBxdWFsaWZpZWRQcm9kdWN0cyxcbiAgICAgICAgICBjdXJyZW5jeVxuICAgICAgICApO1xuICAgICAgICBpZiAoZGlzY291bnQgPiByZXN1bHQudG90YWxEaXNjb3VudClcbiAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICBwcm9tb3Rpb25OYW1lczogW3Byb21vdGlvbi5jb25zdHJ1Y3Rvci5uYW1lXSxcbiAgICAgICAgICAgIHRvdGFsRGlzY291bnQ6IGRpc2NvdW50LFxuICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBSZW1haW5kZXIsIGNhbGN1bGF0ZSBkaXNjb3VudCBhZ2FpbnN0IHdoYXQgaXMgZGl2aXNibGUgYW5kIHBlcmZvcm0gcmVjdXJzaW9uIG9uIHJlbWFpbmRlclxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFNwbGl0IGJhc2tldCBxdWFsaWZpZWQgcHJvZHVjdHMgaW50byBudW1iZXIgZGl2aXNpYmxlIGJ5IHByb21vdGlvblxuICAgICAgICBjb25zdCBkaXNjb3VudGFibGVQcm9kdWN0cyA9IHF1YWxpZmllZFByb2R1Y3RzLnNwbGljZShcbiAgICAgICAgICAwLFxuICAgICAgICAgIHF1YWxpZmllZFByb2R1Y3RzLmxlbmd0aCAtIHJlbWFpbmRlclxuICAgICAgICApO1xuICAgICAgICAvLyBDYWxjdWxhdGUgZGlzY291bnQgb24gYmFza2V0IHF1YWxpZmllZCBwcm9kdWN0c1xuICAgICAgICBjb25zdCBwYXJ0aWFsRGlzY291bnQgPSBwcm9tb3Rpb24uY2FsY3VsYXRlRGlzY291bnQoXG4gICAgICAgICAgZGlzY291bnRhYmxlUHJvZHVjdHMsXG4gICAgICAgICAgY3VycmVuY3lcbiAgICAgICAgKTtcbiAgICAgICAgLy8gVGFrZSByZW1haW5kZXIgb2YgYmFza2V0IHF1YWxpZmllZCBwcm9kdWN0cywgY2hlY2sgb3RoZXIgcHJvbW90aW9ucyBmb3IgZGlzY291bnRzIHZpYSBQcm9tb3Rpb25PcHRpbWlzZXIvIHJlY3Vyc2lvblxuICAgICAgICBjb25zdCByZW1haW5pbmdQcm9kdWN0cyA9IHF1YWxpZmllZFByb2R1Y3RzLnNwbGljZSgtcmVtYWluZGVyKTtcbiAgICAgICAgY29uc3QgcmVjdXJzaW9uRGlzY291bnQgPSBQcm9tb3Rpb25PcHRpbWlzZXIuZ2V0QmVzdERpc2NvdW50KFxuICAgICAgICAgIHJlbWFpbmluZ1Byb2R1Y3RzLFxuICAgICAgICAgIGN1cnJlbmN5XG4gICAgICAgICk7XG4gICAgICAgIC8vIFRhbGx5LXVwIHBhcnRpYWwgYW5kIHJlY3Vyc2lvbiBkaXNjb3VudFxuICAgICAgICBjb25zdCBkaXNjb3VudCA9IHBhcnRpYWxEaXNjb3VudCArIHJlY3Vyc2lvbkRpc2NvdW50LnRvdGFsRGlzY291bnQ7XG4gICAgICAgIGlmIChkaXNjb3VudCA+IHJlc3VsdC50b3RhbERpc2NvdW50KVxuICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHByb21vdGlvbk5hbWVzOiBbXG4gICAgICAgICAgICAgIHByb21vdGlvbi5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAuLi5yZWN1cnNpb25EaXNjb3VudC5wcm9tb3Rpb25OYW1lcyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b3RhbERpc2NvdW50OiBkaXNjb3VudCxcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==