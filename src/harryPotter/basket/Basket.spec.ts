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
    expect(basket.calculateTotal()).toEqual(8);
  });

  it('calculateTotal: should apply 5% discount when purchasing two different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    expect(basket.calculateTotal()).toEqual(16 * 0.95);
  });

  it('calculateTotal: should **not** apply 5% discount when purchasing one Harry Potter book, and a random book', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(randomBook);
    expect(basket.calculateTotal()).toEqual(16);
  });

  it('calculateTotal: should not apply discount when purchasing two of **the same** Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter1);
    expect(basket.calculateTotal()).toEqual(16);
  });

  it('calculateTotal: should apply 10% discount when purchasing three different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    expect(basket.calculateTotal()).toEqual(21.6);
  });

  it('calculateTotal: should should not apply discount when purchasing three of *the same* Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter1);
    expect(basket.calculateTotal()).toEqual(24);
  });

  it('calculateTotal: should apply 20% discount when purchasing four different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    expect(basket.calculateTotal()).toEqual(25.6);
  });

  it('calculateTotal: should apply 5% discount on two books, when purchasing four Harry Potter books, but three are the same book', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter2);
    expect(basket.calculateTotal()).toEqual(31.2);
  });

  it('calculateTotal: should apply 25% discount when purchasing five different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    expect(basket.calculateTotal()).toEqual(30);
  });

  it('calculateTotal: should apply 25% discount on five books, and **no** discount on one when purchasing six different Harry Potter books', async () => {
    const basket = new Basket();
    basket.addItem(harryPotter1);
    basket.addItem(harryPotter2);
    basket.addItem(harryPotter3);
    basket.addItem(harryPotter4);
    basket.addItem(harryPotter5);
    basket.addItem(harryPotter6);
    expect(basket.calculateTotal()).toEqual(38);
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
    expect(basket.calculateTotal()).toEqual(45.2);
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
    expect(basket.calculateTotal()).toEqual(69.2);
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
    expect(basket.calculateTotal()).toEqual(157.2);
  });
});
