/**
 * @description Interface for user-defined rules
 */
export interface KeyWordMap {
  divisibleBy: number;
  replacement: string;
}
/**
 * @description Returns user-defined map, or generated rules.
 *   Factory Pattern, creates and returns rules.
 * @param {Array<KeyWordMap>} ruleMap
 * @return {Array<nKeyWordMap>}
 */
function setupRules(ruleMap?: Array<KeyWordMap>): Array<KeyWordMap> {
  // Validate and return user-deifned rules
  if (ruleMap) {
    // Protect against runtime errors in user-supplied source map
    ruleMap.map((rule) => {
      // Confirm required properties exist
      if (!Object.prototype.hasOwnProperty.call(rule, `divisibleBy`))
        throw new Error(`Rule must contain a 'divisibleBy' property`);
      if (!Object.prototype.hasOwnProperty.call(rule, `replacement`))
        throw new Error(`Rule must contain a 'replacement' property`);
      // Check supplied values are valid
      if (isNaN(rule.divisibleBy))
        throw new Error(`divisibleBy must be a 'number'`);
      if (typeof rule.replacement !== 'string')
        throw new Error(`replacement must be a 'string'`);
    });
    return ruleMap;
  }
  // Return default rules
  else {
    return [
      {
        divisibleBy: 3,
        replacement: 'Fizz',
      },
      {
        divisibleBy: 5,
        replacement: 'Buzz',
      },
    ];
  }
}
/**
 * @description Creates an array of user-defined/ default length, and
 *  replaces values in the array with user-defined/ default strings.
 *  Decorator Pattern; replaces elements of an array with user-defined
 *  strings.
 *  Uses DI for rules, and SRP for rule generation/ validation vs.
 *  decoration of the array itself. Also, DRY.
 * @param {number} arrayLength
 * @param {Array<KeyWordMap>} map
 * @return {Array<number | string>}
 */
export default function (
  arrayLength = 100,
  map?: Array<KeyWordMap>
): Array<number | string> {
  // Validate inputs
  if (isNaN(arrayLength)) throw new Error('`arrLength` must be a number');
  // Setup/ build rules
  const rules = setupRules(map);
  // Sort rules, by divisible by
  const sortedRules = rules.sort((a, b) => {
    return a.divisibleBy - b.divisibleBy;
  });
  // Create array, replacing values in-line with rules
  const arrResult: Array<number | string> = Array(arrayLength)
    // Pre-fill array with zeros
    .fill(0)
    // Replace numbers with rule-defined replacements
    .map((val, index) => {
      // Iterate through each user-defined rule
      // Reduces to a single value; starting value is ''
      const replace = sortedRules.reduce((acc, rule) => {
        // Check if `index+1` is divisible by `rule.divisibleBy`
        // Use `index +1` for equality, `value` of this index is `0` from Array.fill
        if ((index + 1) % rule.divisibleBy === 0) {
          // Add `rule.replacement` string to accumulator
          acc += rule.replacement;
        }
        // Return accumulator once all rules checked
        return acc;
      }, '');
      return replace ? replace : index + 1;
    });
  // Output to console so you can `see` the results
  // console.log(arrResult.join(', '));
  return arrResult;
}
