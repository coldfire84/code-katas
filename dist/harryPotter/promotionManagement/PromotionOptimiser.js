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
            const discount = promotion.applyDiscount(items, currency);
            if (discount > bestResult.discount)
                bestResult = {
                    promotionName: promotion.constructor.name,
                    discount,
                };
        });
        // console.log(bestResult);
        return bestResult.discount;
    }
}
exports.PromotionOptimiser = PromotionOptimiser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW90aW9uT3B0aW1pc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hhcnJ5UG90dGVyL3Byb21vdGlvbk1hbmFnZW1lbnQvUHJvbW90aW9uT3B0aW1pc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1HQUFnRztBQUNoRyw2RkFBMEY7QUFDMUYsaUdBQThGO0FBQzlGLGlHQUE4RjtBQUU5Rjs7R0FFRztBQUNILE1BQWEsa0JBQWtCO0lBQzdCOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxVQUFVO1FBQ2YsT0FBTztZQUNMLElBQUksdUVBQWtDLEVBQUU7WUFDeEMsSUFBSSw2RUFBcUMsRUFBRTtZQUMzQyxJQUFJLDJFQUFvQyxFQUFFO1lBQzFDLElBQUksMkVBQW9DLEVBQUU7U0FDM0MsQ0FBQztJQUNKLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFxQixFQUFFLFFBQWdCO1FBQzVELElBQUksVUFBVSxHQUdWO1lBQ0YsYUFBYSxFQUFFLEVBQUU7WUFDakIsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO1FBQ0Ysd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxRCxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUTtnQkFDaEMsVUFBVSxHQUFHO29CQUNYLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUk7b0JBQ3pDLFFBQVE7aUJBQ1QsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsMkJBQTJCO1FBQzNCLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUF0Q0QsZ0RBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJuYWwgSW1wb3J0c1xuaW1wb3J0IHsgUHJvbW90aW9uIH0gZnJvbSAnLi9Qcm9tb3Rpb24nO1xuaW1wb3J0IHsgQnV5VGhyZWVIYXJyeVBvdHRlckJvb2tzU2F2ZTEwUGVyY2VudCB9IGZyb20gJy4vQnV5VGhyZWVIYXJyeVBvdHRlckJvb2tzU2F2ZTEwUGVyY2VudCc7XG5pbXBvcnQgeyBCdXlUd29IYXJyeVBvdHRlckJvb2tzU2F2ZTVQZXJjZW50IH0gZnJvbSAnLi9CdXlUd29IYXJyeVBvdHRlckJvb2tzU2F2ZTVQZXJjZW50JztcbmltcG9ydCB7IEJ1eUZvdXJIYXJyeVBvdHRlckJvb2tzU2F2ZTIwUGVyY2VudCB9IGZyb20gJy4vQnV5Rm91ckhhcnJ5UG90dGVyQm9va3NTYXZlMjBQZXJjZW50JztcbmltcG9ydCB7IEJ1eUZpdmVIYXJyeVBvdHRlckJvb2tzU2F2ZTI1UGVyY2VudCB9IGZyb20gJy4vQnV5Rml2ZUhhcnJ5UG90dGVyQm9va3NTYXZlMjVQZXJjZW50JztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0TWFuYWdlbWVudC9Qcm9kdWN0Jztcbi8qKlxuICogQGRlc2NyaXB0aW9uIFByb21vdGlvbiBPcHRpbWlzZXIsIHVzZWQgdG8gZmluZCBiZXN0IHByb21vdGlvbi4gVXNlcyBPcHRpbWlzZXIgUGF0dGVybi5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb21vdGlvbk9wdGltaXNlciB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRW51bSBmb3IgYWxsIFByb21vdGlvbnNcbiAgICogQHJldHVybiB7QXJyYXk8UHJvbW90aW9uPn1cbiAgICovXG4gIHN0YXRpYyBwcm9tb3Rpb25zKCk6IEFycmF5PFByb21vdGlvbj4ge1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgQnV5VHdvSGFycnlQb3R0ZXJCb29rc1NhdmU1UGVyY2VudCgpLFxuICAgICAgbmV3IEJ1eVRocmVlSGFycnlQb3R0ZXJCb29rc1NhdmUxMFBlcmNlbnQoKSxcbiAgICAgIG5ldyBCdXlGb3VySGFycnlQb3R0ZXJCb29rc1NhdmUyMFBlcmNlbnQoKSxcbiAgICAgIG5ldyBCdXlGaXZlSGFycnlQb3R0ZXJCb29rc1NhdmUyNVBlcmNlbnQoKSxcbiAgICBdO1xuICB9XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHByb21vdGlvbiBhbmQgd29ya3Mgb3V0IGJlc3QgZGlzY291bnQgYXZhaWxhYmxlIGFnYWluc3QgYmFza2V0XG4gICAqIEBwYXJhbSB7QXJyYXk8UHJvZHVjdD59IGl0ZW1zXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBnZXRCZXN0RGlzY291bnQoaXRlbXM6IEFycmF5PFByb2R1Y3Q+LCBjdXJyZW5jeTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgYmVzdFJlc3VsdDoge1xuICAgICAgcHJvbW90aW9uTmFtZTogc3RyaW5nO1xuICAgICAgZGlzY291bnQ6IG51bWJlcjtcbiAgICB9ID0ge1xuICAgICAgcHJvbW90aW9uTmFtZTogJycsXG4gICAgICBkaXNjb3VudDogMCxcbiAgICB9O1xuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBwcm9tb3Rpb25zIHRvIGNhbGN1bGF0ZSBiZXN0IGRpc2NvdW50XG4gICAgdGhpcy5wcm9tb3Rpb25zKCkubWFwKChwcm9tb3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGRpc2NvdW50ID0gcHJvbW90aW9uLmFwcGx5RGlzY291bnQoaXRlbXMsIGN1cnJlbmN5KTtcbiAgICAgIGlmIChkaXNjb3VudCA+IGJlc3RSZXN1bHQuZGlzY291bnQpXG4gICAgICAgIGJlc3RSZXN1bHQgPSB7XG4gICAgICAgICAgcHJvbW90aW9uTmFtZTogcHJvbW90aW9uLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgZGlzY291bnQsXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coYmVzdFJlc3VsdCk7XG4gICAgcmV0dXJuIGJlc3RSZXN1bHQuZGlzY291bnQ7XG4gIH1cbn1cbiJdfQ==