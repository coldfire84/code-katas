import { Context, Strategy, Rule } from './fizzBuzzDp';

// Inconsistent approach tesing: experimented with options!
// Could DRY testing approach, hate duplication of logic

describe('Fizz Buzz', () => {
  it('Should return an array that has 100 items', () => {
    // No user-defined array size, no custom rules
    const context = new Context();
    const result = context.evaluate(100);
    expect(result.length).toEqual(100);
  });

  it('Should return an array of user-specified size (50)', () => {
    // User-defined array size, no custom rules
    const context = new Context();
    const result = context.evaluate(50);
    expect(result.length).toEqual(50);
  });

  // Takes 16ms, for 1 million, vs 6 ms for 100 --> console output adds 2 seconds!
  it('Should return an array of user-specified size (1000000)', () => {
    // User-defined array size, no custom rules
    const context = new Context();
    const result = context.evaluate(1000000);
    expect(result.length).toEqual(1000000);
  });

  it('Should replace multiples of 3 with `Fizz,` 5 with `Buzz` and 15 with `FizzBuzz`', () => {
    // No user-defined array size, no custom rules
    const context = new Context();
    const result = context.evaluate();
    // Use ternary operator - could use this throughout to avoid use of `if` statements
    for (let i = 1; i <= 100; i++) {
      i % 15 === 0
        ? expect(result[i - 1]).toEqual(`FizzBuzz`)
        : i % 3 === 0
        ? expect(result[i - 1]).toEqual(`Fizz`)
        : i % 5 === 0
        ? expect(result[i - 1]).toEqual(`Buzz`)
        : expect(result[i - 1]).toEqual(i);
    }
  });

  it('Should replace multiples of 3 with `Wizz,` 5 with `Wazz` and 15 with `WizzWazz`', () => {
    // User-defined rules
    const strategy = new Strategy([
      new Rule({
        operator: '%',
        value: 3,
        replacement: 'Wizz',
      }),
      new Rule({
        operator: '%',
        value: 5,
        replacement: 'Wazz',
      }),
    ]);
    // User-defined array size, user-defined rules
    const context = new Context(strategy);
    const result = context.evaluate(100);
    for (let i = 1; i <= 100; i++) {
      i % 15 === 0
        ? expect(result[i - 1]).toEqual(`WizzWazz`)
        : i % 3 === 0
        ? expect(result[i - 1]).toEqual(`Wizz`)
        : i % 5 === 0
        ? expect(result[i - 1]).toEqual(`Wazz`)
        : expect(result[i - 1]).toEqual(i);
    }
  });

  it('Should replace multiples of 4 with `Quad,` 10 with `Dec`', () => {
    // User-defined rules
    const strategy = new Strategy([
      new Rule({
        operator: '%',
        value: 4,
        replacement: 'Quad',
      }),
      new Rule({
        operator: '%',
        value: 10,
        replacement: 'Dec',
      }),
    ]);
    // User-defined array size, user-defined rules
    const context = new Context(strategy);
    const result = context.evaluate(100);
    for (let i = 1; i <= 50; i++) {
      // Catch-all numbers impacted by user-defined rules
      if (i % 4 === 0 || i % 10 === 0) {
        if (i % 4 === 0) expect(result[i - 1]).toContain('Quad');
        if (i % 10 === 0) expect(result[i - 1]).toContain('Dec');
      }
      // Verify other numbers remain untouched
      else {
        expect(result[i - 1]).toEqual(i);
      }
    }
  });

  it('Should throw an error when array size is zero', () => {
    const testInvalidArrayLength = () => {
      const context = new Context();
      const result = context.evaluate(0);
    };
    expect(testInvalidArrayLength).toThrow();
  });

  it('Should throw an error when invalid strategy passed to Context', () => {
    const testInvalidStrategy = () => {
      // @ts-expect-error: Allow for input validation checking
      const context = new Context('blah');
    };
    expect(testInvalidStrategy).toThrow();
  });

  it('Should throw an error when user-defined array size not a number', () => {
    const testInvalidArrayLength = () => {
      const context = new Context();
      // @ts-expect-error: Allow for input validation checking
      const result = context.evaluate('zero');
    };
    expect(testInvalidArrayLength).toThrow();
  });

  it("Should throw an error when user-defined rule 'operator' is not a string", () => {
    const testInvalidOperator = () => {
      // User-defined rules
      const strategy = new Strategy([
        new Rule({
          // @ts-expect-error: Allow for input validation checking
          operator: 6,
          value: 4,
          replacement: 'Quad',
        }),
      ]);
    };
    expect(testInvalidOperator).toThrow();
  });

  it("Should throw an error when user-defined rule 'value' is not a number", () => {
    const testInvalidValue = () => {
      // User-defined rules
      const strategy = new Strategy([
        new Rule({
          operator: '%',
          // @ts-expect-error: Allow for input validation checking
          value: 'string',
          replacement: 'Quad',
        }),
      ]);
    };
    expect(testInvalidValue).toThrow();
  });

  it("Should throw an error when user-defined rule 'replacement' is not a string", () => {
    const testInvalidReplacement = () => {
      // User-defined rules
      const strategy = new Strategy([
        new Rule({
          operator: '%',
          value: 5,
          // @ts-expect-error: Allow for input validation checking
          replacement: 0,
        }),
      ]);
    };
    expect(testInvalidReplacement).toThrow();
  });

  it("Should throw an error when user-defined rule 'operator' property is missing", () => {
    const testMissingOperator = () => {
      // User-defined rules
      const strategy = new Strategy([
        // @ts-expect-error: Allow for input validation checking
        new Rule({
          // operator: '%',
          value: 5,
          replacement: 'text',
        }),
      ]);
    };
    expect(testMissingOperator).toThrow();
  });
  it("Should throw an error when user-defined rule 'value' property is missing", () => {
    const testMissingValue = () => {
      // User-defined rules
      const strategy = new Strategy([
        // @ts-expect-error: Allow for input validation checking
        new Rule({
          operator: '%',
          //value: 5,
          replacement: 'text',
        }),
      ]);
    };
    expect(testMissingValue).toThrow();
  });

  it("Should throw an error when user-defined rule 'replacement' property is missing", () => {
    const testMissingReplacement = () => {
      // User-defined rules
      const strategy = new Strategy([
        // @ts-expect-error: Allow for input validation checking
        new Rule({
          operator: '%',
          value: 5,
          //replacement: 'text',
        }),
      ]);
    };
    expect(testMissingReplacement).toThrow();
  });
});
