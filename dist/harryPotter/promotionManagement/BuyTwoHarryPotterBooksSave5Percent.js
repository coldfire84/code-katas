"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyTwoHarryPotterBooksSave5Percent = void 0;
// Internal Imports
const Promotion_1 = require("./Promotion");
const qualifyingProducts_1 = require("./qualifyingProducts");
/**
 * @description By two, save 5% Promotion, uses Strategy Pattern
 */
class BuyTwoHarryPotterBooksSave5Percent extends Promotion_1.Promotion {
    constructor() {
        super();
        this.qualifyingProducts = qualifyingProducts_1.qualifyingProducts;
        this.discount = 0.05; // 5%
        this.qualifyingProductCount = 2;
        this.allowMultiplesOfSameProduct = false;
    }
}
exports.BuyTwoHarryPotterBooksSave5Percent = BuyTwoHarryPotterBooksSave5Percent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV5VHdvSGFycnlQb3R0ZXJCb29rc1NhdmU1UGVyY2VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXJyeVBvdHRlci9wcm9tb3Rpb25NYW5hZ2VtZW50L0J1eVR3b0hhcnJ5UG90dGVyQm9va3NTYXZlNVBlcmNlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUJBQW1CO0FBQ25CLDJDQUF3QztBQUN4Qyw2REFBMEQ7QUFDMUQ7O0dBRUc7QUFDSCxNQUFhLGtDQUFtQyxTQUFRLHFCQUFTO0lBQy9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsa0JBQWtCLEdBQUcsdUNBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLO1FBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFSRCxnRkFRQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVybmFsIEltcG9ydHNcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4vUHJvbW90aW9uJztcbmltcG9ydCB7IHF1YWxpZnlpbmdQcm9kdWN0cyB9IGZyb20gJy4vcXVhbGlmeWluZ1Byb2R1Y3RzJztcbi8qKlxuICogQGRlc2NyaXB0aW9uIEJ5IHR3bywgc2F2ZSA1JSBQcm9tb3Rpb24sIHVzZXMgU3RyYXRlZ3kgUGF0dGVyblxuICovXG5leHBvcnQgY2xhc3MgQnV5VHdvSGFycnlQb3R0ZXJCb29rc1NhdmU1UGVyY2VudCBleHRlbmRzIFByb21vdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5xdWFsaWZ5aW5nUHJvZHVjdHMgPSBxdWFsaWZ5aW5nUHJvZHVjdHM7XG4gICAgdGhpcy5kaXNjb3VudCA9IDAuMDU7IC8vIDUlXG4gICAgdGhpcy5xdWFsaWZ5aW5nUHJvZHVjdENvdW50ID0gMjtcbiAgICB0aGlzLmFsbG93TXVsdGlwbGVzT2ZTYW1lUHJvZHVjdCA9IGZhbHNlO1xuICB9XG59XG4iXX0=