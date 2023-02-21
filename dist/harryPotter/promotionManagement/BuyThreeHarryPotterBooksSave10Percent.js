"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyThreeHarryPotterBooksSave10Percent = void 0;
// Internal Imports
const Promotion_1 = require("./Promotion");
const qualifyingProducts_1 = require("./qualifyingProducts");
/**
 * @description By three, save 10% Promotion, uses Strategy Pattern
 */
class BuyThreeHarryPotterBooksSave10Percent extends Promotion_1.Promotion {
    constructor() {
        super();
        this.qualifyingProducts = qualifyingProducts_1.harryPotterBooks;
        this.discount = 0.1; // 10%
        this.qualifyingProductCount = 3;
        this.allowMultiplesOfSameProduct = false;
    }
}
exports.BuyThreeHarryPotterBooksSave10Percent = BuyThreeHarryPotterBooksSave10Percent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV5VGhyZWVIYXJyeVBvdHRlckJvb2tzU2F2ZTEwUGVyY2VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXJyeVBvdHRlci9wcm9tb3Rpb25NYW5hZ2VtZW50L0J1eVRocmVlSGFycnlQb3R0ZXJCb29rc1NhdmUxMFBlcmNlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUJBQW1CO0FBQ25CLDJDQUF3QztBQUN4Qyw2REFBd0Q7QUFDeEQ7O0dBRUc7QUFDSCxNQUFhLHFDQUFzQyxTQUFRLHFCQUFTO0lBQ2xFO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsa0JBQWtCLEdBQUcscUNBQWdCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNO1FBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFSRCxzRkFRQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVybmFsIEltcG9ydHNcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4vUHJvbW90aW9uJztcbmltcG9ydCB7IGhhcnJ5UG90dGVyQm9va3MgfSBmcm9tICcuL3F1YWxpZnlpbmdQcm9kdWN0cyc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBCeSB0aHJlZSwgc2F2ZSAxMCUgUHJvbW90aW9uLCB1c2VzIFN0cmF0ZWd5IFBhdHRlcm5cbiAqL1xuZXhwb3J0IGNsYXNzIEJ1eVRocmVlSGFycnlQb3R0ZXJCb29rc1NhdmUxMFBlcmNlbnQgZXh0ZW5kcyBQcm9tb3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucXVhbGlmeWluZ1Byb2R1Y3RzID0gaGFycnlQb3R0ZXJCb29rcztcbiAgICB0aGlzLmRpc2NvdW50ID0gMC4xOyAvLyAxMCVcbiAgICB0aGlzLnF1YWxpZnlpbmdQcm9kdWN0Q291bnQgPSAzO1xuICAgIHRoaXMuYWxsb3dNdWx0aXBsZXNPZlNhbWVQcm9kdWN0ID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==