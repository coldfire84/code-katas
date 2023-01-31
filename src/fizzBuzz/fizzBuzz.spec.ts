import fizzBuzz, { KeyWordMap } from './fizzBuzz';

// Inconsistent approach tesing: experimented with options!
// Could DRY testing approach, hate duplication of logic

describe('Fizz Buzz', () => {
  it('Should return an array that has 100 items', () => {
    // No user-defined array size, no custom rules
    const result = fizzBuzz();
    expect(result.length).toEqual(100);
  });

  it('Should return an array of user-specified size (50)', () => {
    // User-defined array size, no custom rules
    const result = fizzBuzz(50);
    expect(result.length).toEqual(50);
  });

  // Takes 16ms, for 1 million, vs 6 ms for 100 --> console output adds 2 seconds!
  it('Should return an array of user-specified size (1000000)', () => {
    // User-defined array size, no custom rules
    const result = fizzBuzz(1000000);
    expect(result.length).toEqual(1000000);
  });

  it('Should replace multiples of 3 with `Fizz,` 5 with `Buzz` and 15 with `FizzBuzz`', () => {
    // No user-defined array size, no custom rules
    const result = fizzBuzz();
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
    const map = [
      {
        divisibleBy: 3,
        replacement: 'Wizz',
      },
      {
        divisibleBy: 5,
        replacement: 'Wazz',
      },
    ];
    // User-defined array size, user-defined rules
    const result = fizzBuzz(100, map);
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
    const map = [
      {
        divisibleBy: 4,
        replacement: 'Quad',
      },
      {
        divisibleBy: 10,
        replacement: 'Dec',
      },
    ];
    // User-defined array size, user-defined rules
    const result = fizzBuzz(50, map);
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

  // it('Should throw an error when array size is zero', () => {
  //   const testInvalidArrayLength = () => {
  //     fizzBuzz(0);
  //   };
  //   expect(testInvalidArrayLength).toThrow();
  // });

  it('Should throw an error when user-defined array size not a number', () => {
    const testInvalidArrayLength = () => {
      // @ts-expect-error: Allow for input validation checking
      fizzBuzz('zero');
    };
    expect(testInvalidArrayLength).toThrow();
  });

  it("Should throw an error when user-defined rule 'divisibleBy' is not a number", () => {
    const testInvalidDivisibleBy = () => {
      const map = [
        {
          divisibleBy: 'hello',
          replacement: 'newText',
        },
      ];
      // @ts-expect-error: Allow for input validation checking
      fizzBuzz(50, map as KeyWordMap);
    };
    expect(testInvalidDivisibleBy).toThrow();
  });

  it("Should throw an error when user-defined rule 'replacement' is not a string", () => {
    const testInvalidReplacement = () => {
      const map = [
        {
          divisibleBy: 5,
          replacement: 10,
        },
      ];
      // @ts-expect-error: Allow for input validation checking
      fizzBuzz(50, map);
    };
    expect(testInvalidReplacement).toThrow();
  });

  it("Should throw an error when user-defined rule 'divisibleBy' property is missing", () => {
    const testMissingDivisibleBy = () => {
      const map = [
        {
          //divisibleBy: 5,
          replacement: 10,
        },
      ];
      // @ts-expect-error: Allow for input validation checking
      fizzBuzz(50, map);
    };
    expect(testMissingDivisibleBy).toThrow();
  });

  it("Should throw an error when user-defined rule 'replacement' property is missing", () => {
    const testMissingReplacement = () => {
      const map = [
        {
          divisibleBy: 5,
          // replacement: 10,
        },
      ];
      // @ts-expect-error: Allow for input validation checking
      fizzBuzz(50, map);
    };
    expect(testMissingReplacement).toThrow();
  });
});
