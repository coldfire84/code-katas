/**
 * @description Rule Interface
 */
interface RuleProps {
  operator: string;
  value: number;
  replacement: string;
}
/**
 * @description Rule Base class
 */
export class Rule {
  public operator: string;
  public value: number;
  public replacement: string;
  /**
   * @description Create a new rule
   * @param {RuleProps} props
   */
  constructor(props: RuleProps) {
    // Check required props
    if (props.operator === undefined)
      throw new Error(`Rule must contain a 'operator' property`);
    if (props.value === undefined)
      throw new Error(`Rule must contain a 'value' property`);
    if (props.replacement === undefined)
      throw new Error(`Rule must contain a 'replacement' property`);
    // Check supplied values are valid
    if (typeof props.operator !== 'string')
      throw new Error(`operator must be a 'string'`);
    if (isNaN(props.value)) throw new Error(`'value' must be a 'number'`);
    if (typeof props.replacement !== 'string')
      throw new Error(`replacement must be a 'string'`);
    // Set properties
    this.operator = props.operator;
    this.value = props.value;
    this.replacement = props.replacement;
  }
  /**
   * @description Apply rule to given number/ value
   * @param {number} num
   */
  apply(num: number) {
    const mathOperators = {
      '%': (a: number, b: number) => a % b === 0,
      // '*': (a: number, b: number) => a * b === 0,
    };
    return mathOperators[this.operator as keyof typeof mathOperators](
      num,
      this.value
    );
  }
}
/**
 * @description Base Strategy Class
 */
export class Strategy {
  protected rules: Array<Rule>;
  constructor(rules: Array<Rule>) {
    // Perform validation on supplied rules
    this.rules = rules;
  }
  /**
   * @description Create array, replacing values as outlined in strategy
   * @param {number} arrayLength
   */
  map(arrayLength: number): Array<number | string> {
    // Sort rules
    const sortedRules = this.rules.sort((a, b) => {
      return a.value - b.value;
    });
    const arrResult: Array<number | string> = Array(arrayLength)
      .fill(0)
      .map((val, index) => {
        const replace = sortedRules.reduce((acc, rule) => {
          // Check if `index+1` is divisible by `rule.divisibleBy`
          // Use `index +1` for equality, `value` of this index is `0` from Array.fill
          if (rule.apply(index + 1)) acc += rule.replacement;
          // Return accumulator once all rules checked
          return acc;
        }, '');
        return replace ? replace : index + 1;
      });
    return arrResult;
  }
}
/**
 * @description Default FizzBuzz strategy, replaces anything divisible by three with `Fizz`
 *   and anything divisible by five with `Buzz`
 */
const defaultStrategy = new Strategy([
  new Rule({
    operator: '%',
    value: 3,
    replacement: 'Fizz',
  }),
  new Rule({
    operator: '%',
    value: 5,
    replacement: 'Buzz',
  }),
]);
/**
 * @description Context Class
 */
export class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy = defaultStrategy) {
    // Validate inputs
    if (!(strategy instanceof Strategy))
      throw new Error('`strategy` must be an instance of Strategy');
    // Set Strategy
    this.strategy = strategy;
  }
  /**
   * @description Evaluate strategy against given array size
   * @param {number} arrayLength
   */
  evaluate(arrayLength = 100) {
    // Validate inputs
    if (isNaN(arrayLength)) throw new Error('`arrLength` must be a number');
    if (arrayLength === 0) throw new Error('`arrLength` should be > 0');
    return this.strategy.map(arrayLength);
  }
}
