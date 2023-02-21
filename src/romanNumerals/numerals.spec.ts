import { ContextBuilder } from './numerals';

describe('Roman Numerals', () => {
  // Convert 1, 2 and 3 to I, II & III
  it('should convert 1, 2 and 3 to I, II & III', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(1)).toBe('I');
    expect(context.convert(2)).toBe('II');
    expect(context.convert(3)).toBe('III');
  });
  // Convert 4, 5 and 6 to IV, V & VI
  it('should convert 4, 5 and 6 to IV, V & VI', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(4)).toBe('IV');
    expect(context.convert(5)).toBe('V');
    expect(context.convert(6)).toBe('VI');
  });
  // Convert 7, 8 and 9 to VII, VIII & IX
  it('should convert 7, 8 and 9 to VII, VIII & IX', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(7)).toBe('VII');
    expect(context.convert(8)).toBe('VIII');
    expect(context.convert(9)).toBe('IX');
  });
  // Convert 10, 20 and 30 to X, XX & XXX
  it('should convert 10, 20 and 30 to X, XX & XXX', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(10)).toBe('X');
    expect(context.convert(20)).toBe('XX');
    expect(context.convert(30)).toBe('XXX');
  });
  // Convert 40, 50, 60 and 70 to L, LX & LXX
  it('should convert 40, 50, 60 and 70 to XL, L, LX & LXX', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(40)).toBe('XL');
    expect(context.convert(50)).toBe('L');
    expect(context.convert(60)).toBe('LX');
    expect(context.convert(70)).toBe('LXX');
  });
  // Convert 80, 90 and 100 to LXXX, XC & C
  it('should convert 80, 90 and 100 to LXXX, XC & C', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(80)).toBe('LXXX');
    expect(context.convert(90)).toBe('XC');
    expect(context.convert(100)).toBe('C');
  });
  // Convert 200, 300 and 400 to CC, CCC & CD
  it('should convert 200, 300 and 400 to CC, CCC & CD', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(200)).toBe('CC');
    expect(context.convert(300)).toBe('CCC');
    expect(context.convert(400)).toBe('CD');
  });
  // Convert 500, 600 and 700 to D, DC & DCC
  it('should convert 500, 600 and 700 to D, DC & DCC', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(500)).toBe('D');
    expect(context.convert(600)).toBe('DC');
    expect(context.convert(700)).toBe('DCC');
  });
  // Convert 800, 900 and 1000 to DCCC, CM & M
  it('should convert 800, 900 and 1000 to DCCC, CM & M', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(800)).toBe('DCCC');
    expect(context.convert(900)).toBe('CM');
    expect(context.convert(1000)).toBe('M');
  });
  // Convert 13 to XIII
  it('should convert 13 to XIII', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(13)).toBe('XIII');
  });
  // Convert 95 to XCV
  it('should convert 95 to XCV', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(95)).toBe('XCV');
  });
  // Convert 99 to XCIX
  it('should convert 99 to XCIX', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(99)).toBe('XCIX');
  });
  /////////////////////////////////////
  // Kata Test Cases
  ////////////////////////////////////
  // Convert 5, 10 and 55 to V, X & LV
  it('should convert 5, 10 and 55 to V, X & LV', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(5)).toBe('V');
    expect(context.convert(10)).toBe('X');
    expect(context.convert(55)).toBe('LV');
  });
  // Convert 4, 9 and 11 to IV, IX & XI
  it('should convert 4, 9 and 11 to IV, IX & XI', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(4)).toBe('IV');
    expect(context.convert(9)).toBe('IX');
    expect(context.convert(11)).toBe('XI');
  });
  // Convert 1955, 2000 and 2022 to MCMLV, MM & MMXXII
  it('should convert 1955, 2000 and 2022 to MCMLV, MM & MMXXII', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(context.convert(1955)).toBe('MCMLV');
    expect(context.convert(2000)).toBe('MM');
    expect(context.convert(2022)).toBe('MMXXII');
  });
  // Convert  IX, XXI, MCMLV & MCMLXXVIII to 9, 21, 1955 & 1978
  it('should convert IX, XXI, MCMLV & MCMLXXVIII to 9, 21, 1955 & 1978', () => {
    const context = new ContextBuilder().withConvertFromRomanNumerals().build();
    expect(context.convert('IX')).toBe(9);
    expect(context.convert('XXI')).toBe(21);
    expect(context.convert('MCMLV')).toBe(1955);
    expect(context.convert('MCMLXXVIII')).toBe(1978);
  });
  // Convert 2023 to MMXXIII and then back to 2023
  it('should convert 2023 to MMXXIII and then back to 2023', () => {
    const context = new ContextBuilder()
      .withConvertFromRomanNumerals()
      .withConvertToRomanNumerals()
      .build();
    expect(context.convert(2023)).toBe('MMXXIII');
    expect(context.convert('MMXXIII')).toBe(2023);
  });
  // Show throw an error when invalid roman numeral is passed
  it('should throw an error when invalid Roman numeral/ pattern is passed', () => {
    const context = new ContextBuilder().withConvertFromRomanNumerals().build();
    expect(() => context.convert('MMZ')).toThrow();
    expect(() => context.convert('IIII')).toThrow();
  });
  // Should throw when number greater than 3999 is passed
  it('should throw when number greater than 3999 is passed', () => {
    const context = new ContextBuilder().withConvertToRomanNumerals().build();
    expect(() => context.convert(4000)).toThrow();
  });
});
