import { Basket } from './Basket';
import {
  randomBook,
  harryPotter1,
  harryPotter2,
  harryPotter3,
  harryPotter4,
  harryPotter5,
  harryPotter6,
  harryPotter7,
} from '../productManagement/productData';

describe('Basket Service', () => {
  it('calculateTotal: should not apply discount when purchasing a single book', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(8);
    expect(result.promotions).toEqual([]);
  });

  it('calculateTotal: should apply 5% discount when purchasing two different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(16 * 0.95);
    expect(result.promotions).toEqual(['BuyTwoHarryPotterBooksSave5Percent']);
  });

  it('calculateTotal: should **not** apply 5% discount when purchasing one Harry Potter book, and a random book', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(randomBook);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(16);
    expect(result.promotions).toEqual([]);
  });

  it('calculateTotal: should not apply discount when purchasing two of **the same** Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter1);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(16);
    expect(result.promotions).toEqual([]);
  });

  it('calculateTotal: should apply 10% discount when purchasing three different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(21.6);
    expect(result.promotions).toEqual([
      'BuyThreeHarryPotterBooksSave10Percent',
    ]);
  });

  it('calculateTotal: should should not apply discount when purchasing three of *the same* Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter1);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(24);
    expect(result.promotions).toEqual([]);
  });

  it('calculateTotal: should apply 20% discount when purchasing four different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(25.6);
    expect(result.promotions).toEqual(['BuyFourHarryPotterBooksSave20Percent']);
  });

  it('calculateTotal: should apply 5% discount on two books, when purchasing four Harry Potter books, but three are the same book', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter2);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(31.2);
    expect(result.promotions).toEqual(['BuyTwoHarryPotterBooksSave5Percent']);
  });

  it('calculateTotal: should apply 25% discount when purchasing five different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(30);
    expect(result.promotions).toEqual(['BuyFiveHarryPotterBooksSave25Percent']);
  });

  it('calculateTotal: should apply 25% discount on five books, and **no** discount on one when purchasing six different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    basket.addItem(harryPotter6);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(38);
    expect(result.promotions).toEqual(['BuyFiveHarryPotterBooksSave25Percent']);
  });

  it('calculateTotal: should apply 25% discount on five books, and 5% discount on two books when purchasing seven different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    basket.addItem(harryPotter6);
    basket.addItem(harryPotter7);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(45.2);
    expect(result.promotions).toEqual([
      'BuyFiveHarryPotterBooksSave25Percent',
      'BuyTwoHarryPotterBooksSave5Percent',
    ]);
  });

  it('calculateTotal: should apply 25% discount on five books, 5% discount on two books and **no** discount on three books when purchasing seven different and three identical Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    basket.addItem(harryPotter6);
    basket.addItem(harryPotter7);
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(69.2);
    expect(result.promotions).toEqual([
      'BuyFiveHarryPotterBooksSave25Percent',
      'BuyTwoHarryPotterBooksSave5Percent',
    ]);
  });

  it('calculateTotal: should apply 25% discount on five books, 5% discount on two books and **no** discount on remaining books when purchasing 21 different and three identical Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    basket.addItem(harryPotter6);
    basket.addItem(harryPotter7);
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    basket.addItem(harryPotter6);
    basket.addItem(harryPotter7);
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    basket.addItem(harryPotter6);
    basket.addItem(harryPotter7);
    const result = basket.calculateTotal();
    expect(result.total).toEqual(157.2);
    expect(result.promotions).toEqual([
      'BuyFiveHarryPotterBooksSave25Percent',
      'BuyTwoHarryPotterBooksSave5Percent',
    ]);
  });
});
