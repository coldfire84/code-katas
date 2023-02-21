"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionOptimiser = void 0;
const BuyThreeHarryPotterBooksSave10Percent_1 = require("./BuyThreeHarryPotterBooksSave10Percent");
const BuyTwoHarryPotterBooksSave5Percent_1 = require("./BuyTwoHarryPotterBooksSave5Percent");
const BuyFourHarryPotterBooksSave20Percent_1 = require("./BuyFourHarryPotterBooksSave20Percent");
const BuyFiveHarryPotterBooksSave25Percent_1 = require("./BuyFiveHarryPotterBooksSave25Percent");
const BuyThreeBooksGetOneFree_1 = require("./BuyThreeBooksGetOneFree");
/**
 * @description Promotion Optimiser, used to find best promotion. Uses Optimiser Pattern.
 */
class PromotionOptimiser {
    /**
     * @description Enum for all Promotions, add new promotions here
     * @return {Array<Promotion>}
     */
    static promotions() {
        return [
            new BuyTwoHarryPotterBooksSave5Percent_1.BuyTwoHarryPotterBooksSave5Percent(),
            new BuyThreeHarryPotterBooksSave10Percent_1.BuyThreeHarryPotterBooksSave10Percent(),
            new BuyFourHarryPotterBooksSave20Percent_1.BuyFourHarryPotterBooksSave20Percent(),
            new BuyFiveHarryPotterBooksSave25Percent_1.BuyFiveHarryPotterBooksSave25Percent(),
            new BuyThreeBooksGetOneFree_1.BuyThreeBooksGetOneFree(),
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
                if (discount > result.totalDiscount) {
                    // For each time the promotion is applied, add to result.promotionNames
                    const promotionAppliedTimes = Array(qualifiedProducts.length / promotion.qualifyingProductCount).fill(promotion.constructor.name);
                    result = {
                        promotionNames: [...promotionAppliedTimes],
                        totalDiscount: discount,
                    };
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW90aW9uT3B0aW1pc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL3Byb21vdGlvbk1hbmFnZW1lbnQvUHJvbW90aW9uT3B0aW1pc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1HQUFnRztBQUNoRyw2RkFBMEY7QUFDMUYsaUdBQThGO0FBQzlGLGlHQUE4RjtBQUM5Rix1RUFBb0U7QUFTcEU7O0dBRUc7QUFDSCxNQUFhLGtCQUFrQjtJQUM3Qjs7O09BR0c7SUFDSCxNQUFNLENBQUMsVUFBVTtRQUNmLE9BQU87WUFDTCxJQUFJLHVFQUFrQyxFQUFFO1lBQ3hDLElBQUksNkVBQXFDLEVBQUU7WUFDM0MsSUFBSSwyRUFBb0MsRUFBRTtZQUMxQyxJQUFJLDJFQUFvQyxFQUFFO1lBQzFDLElBQUksaURBQXVCLEVBQUU7U0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLGVBQWUsQ0FDcEIsS0FBcUIsRUFDckIsUUFBZ0I7UUFFaEIsZ0ZBQWdGO1FBQ2hGLElBQUksTUFBTSxHQUE2QjtZQUNyQyxjQUFjLEVBQUUsRUFBRTtZQUNsQixhQUFhLEVBQUUsQ0FBQztTQUNqQixDQUFDO1FBQ0Ysd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQyxNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDMUUsOERBQThEO1lBQzlELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsc0JBQXNCO2dCQUFFLE9BQU87WUFDNUQsbUVBQW1FO1lBQ25FLE1BQU0sU0FBUyxHQUNiLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsc0JBQXNCLENBQUM7WUFDOUQsNkVBQTZFO1lBQzdFLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUMxQyxpQkFBaUIsRUFDakIsUUFBUSxDQUNULENBQUM7Z0JBQ0YsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsRUFBRTtvQkFDbkMsdUVBQXVFO29CQUN2RSxNQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FDakMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxzQkFBc0IsQ0FDNUQsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxHQUFHO3dCQUNQLGNBQWMsRUFBRSxDQUFDLEdBQUcscUJBQXFCLENBQUM7d0JBQzFDLGFBQWEsRUFBRSxRQUFRO3FCQUN4QixDQUFDO2lCQUNIO2FBQ0Y7WUFDRCw0RkFBNEY7aUJBQ3ZGO2dCQUNILHFFQUFxRTtnQkFDckUsTUFBTSxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQ25ELENBQUMsRUFDRCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUNyQyxDQUFDO2dCQUNGLGtEQUFrRDtnQkFDbEQsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUNqRCxvQkFBb0IsRUFDcEIsUUFBUSxDQUNULENBQUM7Z0JBQ0Ysc0hBQXNIO2dCQUN0SCxNQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FDMUQsaUJBQWlCLEVBQ2pCLFFBQVEsQ0FDVCxDQUFDO2dCQUNGLDBDQUEwQztnQkFDMUMsTUFBTSxRQUFRLEdBQUcsZUFBZSxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztnQkFDbkUsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWE7b0JBQ2pDLE1BQU0sR0FBRzt3QkFDUCxjQUFjLEVBQUU7NEJBQ2QsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJOzRCQUMxQixHQUFHLGlCQUFpQixDQUFDLGNBQWM7eUJBQ3BDO3dCQUNELGFBQWEsRUFBRSxRQUFRO3FCQUN4QixDQUFDO2FBQ0w7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQXRGRCxnREFzRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnRlcm5hbCBJbXBvcnRzXG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuL1Byb21vdGlvbic7XG5pbXBvcnQgeyBCdXlUaHJlZUhhcnJ5UG90dGVyQm9va3NTYXZlMTBQZXJjZW50IH0gZnJvbSAnLi9CdXlUaHJlZUhhcnJ5UG90dGVyQm9va3NTYXZlMTBQZXJjZW50JztcbmltcG9ydCB7IEJ1eVR3b0hhcnJ5UG90dGVyQm9va3NTYXZlNVBlcmNlbnQgfSBmcm9tICcuL0J1eVR3b0hhcnJ5UG90dGVyQm9va3NTYXZlNVBlcmNlbnQnO1xuaW1wb3J0IHsgQnV5Rm91ckhhcnJ5UG90dGVyQm9va3NTYXZlMjBQZXJjZW50IH0gZnJvbSAnLi9CdXlGb3VySGFycnlQb3R0ZXJCb29rc1NhdmUyMFBlcmNlbnQnO1xuaW1wb3J0IHsgQnV5Rml2ZUhhcnJ5UG90dGVyQm9va3NTYXZlMjVQZXJjZW50IH0gZnJvbSAnLi9CdXlGaXZlSGFycnlQb3R0ZXJCb29rc1NhdmUyNVBlcmNlbnQnO1xuaW1wb3J0IHsgQnV5VGhyZWVCb29rc0dldE9uZUZyZWUgfSBmcm9tICcuL0J1eVRocmVlQm9va3NHZXRPbmVGcmVlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0TWFuYWdlbWVudC9Qcm9kdWN0Jztcbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHVybiBJbnRlcmZhY2UgZm9yIFByb21vdGlvbk9wdGltaXNlclxuICovXG5pbnRlcmZhY2UgUHJvbW90aW9uT3B0aW1pc2VyUmV0dXJuIHtcbiAgcHJvbW90aW9uTmFtZXM6IEFycmF5PHN0cmluZz47XG4gIHRvdGFsRGlzY291bnQ6IG51bWJlcjtcbn1cbi8qKlxuICogQGRlc2NyaXB0aW9uIFByb21vdGlvbiBPcHRpbWlzZXIsIHVzZWQgdG8gZmluZCBiZXN0IHByb21vdGlvbi4gVXNlcyBPcHRpbWlzZXIgUGF0dGVybi5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb21vdGlvbk9wdGltaXNlciB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRW51bSBmb3IgYWxsIFByb21vdGlvbnMsIGFkZCBuZXcgcHJvbW90aW9ucyBoZXJlXG4gICAqIEByZXR1cm4ge0FycmF5PFByb21vdGlvbj59XG4gICAqL1xuICBzdGF0aWMgcHJvbW90aW9ucygpOiBBcnJheTxQcm9tb3Rpb24+IHtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEJ1eVR3b0hhcnJ5UG90dGVyQm9va3NTYXZlNVBlcmNlbnQoKSxcbiAgICAgIG5ldyBCdXlUaHJlZUhhcnJ5UG90dGVyQm9va3NTYXZlMTBQZXJjZW50KCksXG4gICAgICBuZXcgQnV5Rm91ckhhcnJ5UG90dGVyQm9va3NTYXZlMjBQZXJjZW50KCksXG4gICAgICBuZXcgQnV5Rml2ZUhhcnJ5UG90dGVyQm9va3NTYXZlMjVQZXJjZW50KCksXG4gICAgICBuZXcgQnV5VGhyZWVCb29rc0dldE9uZUZyZWUoKSxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggcHJvbW90aW9uIGFuZCB3b3JrcyBvdXQgYmVzdCBkaXNjb3VudCBhdmFpbGFibGUgYWdhaW5zdCBiYXNrZXRcbiAgICogQHBhcmFtIHtBcnJheTxQcm9kdWN0Pn0gaXRlbXNcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGdldEJlc3REaXNjb3VudChcbiAgICBpdGVtczogQXJyYXk8UHJvZHVjdD4sXG4gICAgY3VycmVuY3k6IHN0cmluZ1xuICApOiBQcm9tb3Rpb25PcHRpbWlzZXJSZXR1cm4ge1xuICAgIC8vIENyZWF0ZSBkZWZhdWx0IHJlc3VsdCwgdXNlZCBpbiBjb21wYXJpbmcgcmVzdWx0cyBmcm9tIGVhY2ggUHJvbW90aW9uIFN0cmF0ZWd5XG4gICAgbGV0IHJlc3VsdDogUHJvbW90aW9uT3B0aW1pc2VyUmV0dXJuID0ge1xuICAgICAgcHJvbW90aW9uTmFtZXM6IFtdLFxuICAgICAgdG90YWxEaXNjb3VudDogMCxcbiAgICB9O1xuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBwcm9tb3Rpb25zIHRvIGNhbGN1bGF0ZSBiZXN0IGRpc2NvdW50XG4gICAgdGhpcy5wcm9tb3Rpb25zKCkubWFwKChwcm9tb3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZFByb2R1Y3RzID0gcHJvbW90aW9uLmdldFF1YWxpZmllZFByb2R1Y3RzKGl0ZW1zLCBjdXJyZW5jeSk7XG4gICAgICAvLyBUb28gZmV3IHByb2R1Y3RzIGZvciBkaXNjb3VudCB0byBhcHBseSwgc2tpcCB0aGlzIHByb21vdGlvblxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA8IHByb21vdGlvbi5xdWFsaWZ5aW5nUHJvZHVjdENvdW50KSByZXR1cm47XG4gICAgICAvLyBDaGVjayBpZiBxdWFsaWZpZWQgcHJvZHVjdHMgZGl2aWRlcyB1cCBieSBxdWFsaWZ5aW5nUHJvZHVjdENvdW50XG4gICAgICBjb25zdCByZW1haW5kZXIgPVxuICAgICAgICBxdWFsaWZpZWRQcm9kdWN0cy5sZW5ndGggJSBwcm9tb3Rpb24ucXVhbGlmeWluZ1Byb2R1Y3RDb3VudDtcbiAgICAgIC8vIElmIG5vIHJlbWFpbmRlciBhcHBseSBkaXNjb3VudCB0byBhbGwgb2YgdGhlIHByb2R1Y3RzIGluIHF1YWxpZmllZFByb2R1Y3RzXG4gICAgICBpZiAocmVtYWluZGVyID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gcHJvbW90aW9uLmNhbGN1bGF0ZURpc2NvdW50KFxuICAgICAgICAgIHF1YWxpZmllZFByb2R1Y3RzLFxuICAgICAgICAgIGN1cnJlbmN5XG4gICAgICAgICk7XG4gICAgICAgIGlmIChkaXNjb3VudCA+IHJlc3VsdC50b3RhbERpc2NvdW50KSB7XG4gICAgICAgICAgLy8gRm9yIGVhY2ggdGltZSB0aGUgcHJvbW90aW9uIGlzIGFwcGxpZWQsIGFkZCB0byByZXN1bHQucHJvbW90aW9uTmFtZXNcbiAgICAgICAgICBjb25zdCBwcm9tb3Rpb25BcHBsaWVkVGltZXMgPSBBcnJheShcbiAgICAgICAgICAgIHF1YWxpZmllZFByb2R1Y3RzLmxlbmd0aCAvIHByb21vdGlvbi5xdWFsaWZ5aW5nUHJvZHVjdENvdW50XG4gICAgICAgICAgKS5maWxsKHByb21vdGlvbi5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICBwcm9tb3Rpb25OYW1lczogWy4uLnByb21vdGlvbkFwcGxpZWRUaW1lc10sXG4gICAgICAgICAgICB0b3RhbERpc2NvdW50OiBkaXNjb3VudCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZW1haW5kZXIsIGNhbGN1bGF0ZSBkaXNjb3VudCBhZ2FpbnN0IHdoYXQgaXMgZGl2aXNibGUgYW5kIHBlcmZvcm0gcmVjdXJzaW9uIG9uIHJlbWFpbmRlclxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFNwbGl0IGJhc2tldCBxdWFsaWZpZWQgcHJvZHVjdHMgaW50byBudW1iZXIgZGl2aXNpYmxlIGJ5IHByb21vdGlvblxuICAgICAgICBjb25zdCBkaXNjb3VudGFibGVQcm9kdWN0cyA9IHF1YWxpZmllZFByb2R1Y3RzLnNwbGljZShcbiAgICAgICAgICAwLFxuICAgICAgICAgIHF1YWxpZmllZFByb2R1Y3RzLmxlbmd0aCAtIHJlbWFpbmRlclxuICAgICAgICApO1xuICAgICAgICAvLyBDYWxjdWxhdGUgZGlzY291bnQgb24gYmFza2V0IHF1YWxpZmllZCBwcm9kdWN0c1xuICAgICAgICBjb25zdCBwYXJ0aWFsRGlzY291bnQgPSBwcm9tb3Rpb24uY2FsY3VsYXRlRGlzY291bnQoXG4gICAgICAgICAgZGlzY291bnRhYmxlUHJvZHVjdHMsXG4gICAgICAgICAgY3VycmVuY3lcbiAgICAgICAgKTtcbiAgICAgICAgLy8gVGFrZSByZW1haW5kZXIgb2YgYmFza2V0IHF1YWxpZmllZCBwcm9kdWN0cywgY2hlY2sgb3RoZXIgcHJvbW90aW9ucyBmb3IgZGlzY291bnRzIHZpYSBQcm9tb3Rpb25PcHRpbWlzZXIvIHJlY3Vyc2lvblxuICAgICAgICBjb25zdCByZW1haW5pbmdQcm9kdWN0cyA9IHF1YWxpZmllZFByb2R1Y3RzLnNwbGljZSgtcmVtYWluZGVyKTtcbiAgICAgICAgY29uc3QgcmVjdXJzaW9uRGlzY291bnQgPSBQcm9tb3Rpb25PcHRpbWlzZXIuZ2V0QmVzdERpc2NvdW50KFxuICAgICAgICAgIHJlbWFpbmluZ1Byb2R1Y3RzLFxuICAgICAgICAgIGN1cnJlbmN5XG4gICAgICAgICk7XG4gICAgICAgIC8vIFRhbGx5LXVwIHBhcnRpYWwgYW5kIHJlY3Vyc2lvbiBkaXNjb3VudFxuICAgICAgICBjb25zdCBkaXNjb3VudCA9IHBhcnRpYWxEaXNjb3VudCArIHJlY3Vyc2lvbkRpc2NvdW50LnRvdGFsRGlzY291bnQ7XG4gICAgICAgIGlmIChkaXNjb3VudCA+IHJlc3VsdC50b3RhbERpc2NvdW50KVxuICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHByb21vdGlvbk5hbWVzOiBbXG4gICAgICAgICAgICAgIHByb21vdGlvbi5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAuLi5yZWN1cnNpb25EaXNjb3VudC5wcm9tb3Rpb25OYW1lcyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b3RhbERpc2NvdW50OiBkaXNjb3VudCxcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==