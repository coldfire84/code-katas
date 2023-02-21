/**
 * Array of objects containing key Roman Numeral values and their corresponding number.
 */
const romanNumerals = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' },
];
/**
 * @description Strategy Abstract Class, strategy pattern.
 */
abstract class Strategy {
  public inputType: string;
  abstract convert(input: string | number): string | number;
  abstract validate(input: string | number): void;
}
/**
 * @description Convert from Roman Numerals Strategy, strategy pattern.
 */
class ConvertFromRomanNumerals extends Strategy {
  inputType = 'string';
  /**
   * @description Validate the input
   * @param input
   */
  validate(input: string) {
    // Test input against strict Roman Numeral regex
    //  source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
    const regex = new RegExp(
      /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/gm
    );
    if (!regex.test(input)) {
      throw new Error('Input is not a valid Roman Numeral');
    }
  }
  /**
   * @description Convert the input to a number
   * @param input
   * @returns
   */
  convert(input: string) {
    let result = 0;
    romanNumerals.forEach((romanNumeral) => {
      while (input.indexOf(romanNumeral.numeral) === 0) {
        result += romanNumeral.value;
        input = input.replace(romanNumeral.numeral, '');
      }
    });
    return result;
  }
}
/**
 * @description Roman Numerals Strategy, strategy pattern.
 */
class ConvertToRomanNumerals extends Strategy {
  inputType = 'number';
  /**
   * @description Validate the input
   * @param input
   */
  validate(input: number) {
    if (typeof input !== 'number') {
      throw new Error('Input is not a valid number');
    }
    if (input < 1 || input > 3999) {
      throw new Error('Input is not a valid number between 1 and 3999');
    }
  }
  /**
   * @description Convert the input to a Roman Numeral
   * @param input
   * @returns {string}
   */
  convert(input: number): string {
    let result = '';
    romanNumerals.forEach((romanNumeral) => {
      while (input >= romanNumeral.value) {
        result += romanNumeral.numeral;
        // Subtract the value of the Roman Numeral from the input
        input -= romanNumeral.value;
      }
    });
    return result;
  }
}
/**
 * @description Context class, context pattern.
 */
class Context {
  private strategies: Array<Strategy> = [];
  /**
   * @description Create a new Context, adding known strategies to this.strategies
   */
  constructor(strategies: Array<Strategy>) {
    this.strategies = strategies;
  }
  /**
   * @description Get the matching strategy based upon the input type
   * @param input
   * @returns {Strategy | undefined}
   */
  public getMatchingStrategy(input: string | number): Strategy | undefined {
    let matchingStrategy: Strategy | undefined;
    this.strategies.forEach((strategy) => {
      if (typeof input === strategy.inputType) matchingStrategy = strategy;
    });
    return matchingStrategy;
  }
  /**
   * @description Convert the input based upon the matching strategy
   * @param input
   * @returns {string | number}
   *
   */
  public convert(input: string | number): string | number {
    const strategy = this.getMatchingStrategy(input);
    if (!strategy) throw new Error('No matching strategy found');
    // Validate the input
    strategy.validate(input);
    // Convert and return the input
    return strategy.convert(input);
  }
}
/**
 * @description Context Builder, builder pattern. Honestly, not needed for this example,
 *   but I wanted to show how it could be used.
 */
export class ContextBuilder {
  private strategies: Array<Strategy> = [];
  /**
   * @description Add ConvertFromRomanNumerals strategy to the Context
   * @returns {ContextBuilder}
   */
  withConvertFromRomanNumerals(): ContextBuilder {
    this.strategies.push(new ConvertFromRomanNumerals());
    return this;
  }
  /**
   * @description Add ConvertToRomanNumerals strategy to the Context
   * @returns {ContextBuilder}
   */
  withConvertToRomanNumerals(): ContextBuilder {
    this.strategies.push(new ConvertToRomanNumerals());
    return this;
  }
  /**
   * @description Create Context
   * @returns {Context}
   */
  build(): Context {
    return new Context(this.strategies);
  }
}
