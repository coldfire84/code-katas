"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Returns user-defined map, or generated rules.
 *   Factory Pattern, creates and returns rules.
 * @param {Array<KeyWordMap>} ruleMap
 * @return {Array<nKeyWordMap>}
 */
function setupRules(ruleMap) {
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
function default_1(arrayLength = 100, map) {
    // Validate inputs
    if (isNaN(arrayLength))
        throw new Error('`arrLength` must be a number');
    // Setup/ build rules
    const rules = setupRules(map);
    // Sort rules, by divisible by
    const sortedRules = rules.sort((a, b) => {
        return a.divisibleBy - b.divisibleBy;
    });
    // Create array, replacing values in-line with rules
    const arrResult = Array(arrayLength)
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
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml6ekJ1enouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZml6ekJ1enovZml6ekJ1enoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTs7Ozs7R0FLRztBQUNILFNBQVMsVUFBVSxDQUFDLE9BQTJCO0lBQzdDLHlDQUF5QztJQUN6QyxJQUFJLE9BQU8sRUFBRTtRQUNYLDZEQUE2RDtRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkIsb0NBQW9DO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQztnQkFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQztnQkFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQ2hFLGtDQUFrQztZQUNsQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUTtnQkFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFDRCx1QkFBdUI7U0FDbEI7UUFDSCxPQUFPO1lBQ0w7Z0JBQ0UsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsV0FBVyxFQUFFLE1BQU07YUFDcEI7WUFDRDtnQkFDRSxXQUFXLEVBQUUsQ0FBQztnQkFDZCxXQUFXLEVBQUUsTUFBTTthQUNwQjtTQUNGLENBQUM7S0FDSDtBQUNILENBQUM7QUFDRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsbUJBQ0UsV0FBVyxHQUFHLEdBQUcsRUFDakIsR0FBdUI7SUFFdkIsa0JBQWtCO0lBQ2xCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN4RSxxQkFBcUI7SUFDckIsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLDhCQUE4QjtJQUM5QixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsb0RBQW9EO0lBQ3BELE1BQU0sU0FBUyxHQUEyQixLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzFELDRCQUE0QjtTQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1IsaURBQWlEO1NBQ2hELEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNsQix5Q0FBeUM7UUFDekMsa0RBQWtEO1FBQ2xELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDL0Msd0RBQXdEO1lBQ3hELDRFQUE0RTtZQUM1RSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO2dCQUN4QywrQ0FBK0M7Z0JBQy9DLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCO1lBQ0QsNENBQTRDO1lBQzVDLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLGlEQUFpRDtJQUNqRCxxQ0FBcUM7SUFDckMsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQW5DRCw0QkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBkZXNjcmlwdGlvbiBJbnRlcmZhY2UgZm9yIHVzZXItZGVmaW5lZCBydWxlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEtleVdvcmRNYXAge1xuICBkaXZpc2libGVCeTogbnVtYmVyO1xuICByZXBsYWNlbWVudDogc3RyaW5nO1xufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB1c2VyLWRlZmluZWQgbWFwLCBvciBnZW5lcmF0ZWQgcnVsZXMuXG4gKiAgIEZhY3RvcnkgUGF0dGVybiwgY3JlYXRlcyBhbmQgcmV0dXJucyBydWxlcy5cbiAqIEBwYXJhbSB7QXJyYXk8S2V5V29yZE1hcD59IHJ1bGVNYXBcbiAqIEByZXR1cm4ge0FycmF5PG5LZXlXb3JkTWFwPn1cbiAqL1xuZnVuY3Rpb24gc2V0dXBSdWxlcyhydWxlTWFwPzogQXJyYXk8S2V5V29yZE1hcD4pOiBBcnJheTxLZXlXb3JkTWFwPiB7XG4gIC8vIFZhbGlkYXRlIGFuZCByZXR1cm4gdXNlci1kZWlmbmVkIHJ1bGVzXG4gIGlmIChydWxlTWFwKSB7XG4gICAgLy8gUHJvdGVjdCBhZ2FpbnN0IHJ1bnRpbWUgZXJyb3JzIGluIHVzZXItc3VwcGxpZWQgc291cmNlIG1hcFxuICAgIHJ1bGVNYXAubWFwKChydWxlKSA9PiB7XG4gICAgICAvLyBDb25maXJtIHJlcXVpcmVkIHByb3BlcnRpZXMgZXhpc3RcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJ1bGUsIGBkaXZpc2libGVCeWApKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bGUgbXVzdCBjb250YWluIGEgJ2RpdmlzaWJsZUJ5JyBwcm9wZXJ0eWApO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocnVsZSwgYHJlcGxhY2VtZW50YCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUnVsZSBtdXN0IGNvbnRhaW4gYSAncmVwbGFjZW1lbnQnIHByb3BlcnR5YCk7XG4gICAgICAvLyBDaGVjayBzdXBwbGllZCB2YWx1ZXMgYXJlIHZhbGlkXG4gICAgICBpZiAoaXNOYU4ocnVsZS5kaXZpc2libGVCeSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgZGl2aXNpYmxlQnkgbXVzdCBiZSBhICdudW1iZXInYCk7XG4gICAgICBpZiAodHlwZW9mIHJ1bGUucmVwbGFjZW1lbnQgIT09ICdzdHJpbmcnKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlcGxhY2VtZW50IG11c3QgYmUgYSAnc3RyaW5nJ2ApO1xuICAgIH0pO1xuICAgIHJldHVybiBydWxlTWFwO1xuICB9XG4gIC8vIFJldHVybiBkZWZhdWx0IHJ1bGVzXG4gIGVsc2Uge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGRpdmlzaWJsZUJ5OiAzLFxuICAgICAgICByZXBsYWNlbWVudDogJ0ZpenonLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2aXNpYmxlQnk6IDUsXG4gICAgICAgIHJlcGxhY2VtZW50OiAnQnV6eicsXG4gICAgICB9LFxuICAgIF07XG4gIH1cbn1cbi8qKlxuICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYW4gYXJyYXkgb2YgdXNlci1kZWZpbmVkLyBkZWZhdWx0IGxlbmd0aCwgYW5kXG4gKiAgcmVwbGFjZXMgdmFsdWVzIGluIHRoZSBhcnJheSB3aXRoIHVzZXItZGVmaW5lZC8gZGVmYXVsdCBzdHJpbmdzLlxuICogIERlY29yYXRvciBQYXR0ZXJuOyByZXBsYWNlcyBlbGVtZW50cyBvZiBhbiBhcnJheSB3aXRoIHVzZXItZGVmaW5lZFxuICogIHN0cmluZ3MuXG4gKiAgVXNlcyBESSBmb3IgcnVsZXMsIGFuZCBTUlAgZm9yIHJ1bGUgZ2VuZXJhdGlvbi8gdmFsaWRhdGlvbiB2cy5cbiAqICBkZWNvcmF0aW9uIG9mIHRoZSBhcnJheSBpdHNlbGYuIEFsc28sIERSWS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheUxlbmd0aFxuICogQHBhcmFtIHtBcnJheTxLZXlXb3JkTWFwPn0gbWFwXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXIgfCBzdHJpbmc+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXG4gIGFycmF5TGVuZ3RoID0gMTAwLFxuICBtYXA/OiBBcnJheTxLZXlXb3JkTWFwPlxuKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XG4gIC8vIFZhbGlkYXRlIGlucHV0c1xuICBpZiAoaXNOYU4oYXJyYXlMZW5ndGgpKSB0aHJvdyBuZXcgRXJyb3IoJ2BhcnJMZW5ndGhgIG11c3QgYmUgYSBudW1iZXInKTtcbiAgLy8gU2V0dXAvIGJ1aWxkIHJ1bGVzXG4gIGNvbnN0IHJ1bGVzID0gc2V0dXBSdWxlcyhtYXApO1xuICAvLyBTb3J0IHJ1bGVzLCBieSBkaXZpc2libGUgYnlcbiAgY29uc3Qgc29ydGVkUnVsZXMgPSBydWxlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEuZGl2aXNpYmxlQnkgLSBiLmRpdmlzaWJsZUJ5O1xuICB9KTtcbiAgLy8gQ3JlYXRlIGFycmF5LCByZXBsYWNpbmcgdmFsdWVzIGluLWxpbmUgd2l0aCBydWxlc1xuICBjb25zdCBhcnJSZXN1bHQ6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBBcnJheShhcnJheUxlbmd0aClcbiAgICAvLyBQcmUtZmlsbCBhcnJheSB3aXRoIHplcm9zXG4gICAgLmZpbGwoMClcbiAgICAvLyBSZXBsYWNlIG51bWJlcnMgd2l0aCBydWxlLWRlZmluZWQgcmVwbGFjZW1lbnRzXG4gICAgLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggdXNlci1kZWZpbmVkIHJ1bGVcbiAgICAgIC8vIFJlZHVjZXMgdG8gYSBzaW5nbGUgdmFsdWU7IHN0YXJ0aW5nIHZhbHVlIGlzICcnXG4gICAgICBjb25zdCByZXBsYWNlID0gc29ydGVkUnVsZXMucmVkdWNlKChhY2MsIHJ1bGUpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYGluZGV4KzFgIGlzIGRpdmlzaWJsZSBieSBgcnVsZS5kaXZpc2libGVCeWBcbiAgICAgICAgLy8gVXNlIGBpbmRleCArMWAgZm9yIGVxdWFsaXR5LCBgdmFsdWVgIG9mIHRoaXMgaW5kZXggaXMgYDBgIGZyb20gQXJyYXkuZmlsbFxuICAgICAgICBpZiAoKGluZGV4ICsgMSkgJSBydWxlLmRpdmlzaWJsZUJ5ID09PSAwKSB7XG4gICAgICAgICAgLy8gQWRkIGBydWxlLnJlcGxhY2VtZW50YCBzdHJpbmcgdG8gYWNjdW11bGF0b3JcbiAgICAgICAgICBhY2MgKz0gcnVsZS5yZXBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm4gYWNjdW11bGF0b3Igb25jZSBhbGwgcnVsZXMgY2hlY2tlZFxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgJycpO1xuICAgICAgcmV0dXJuIHJlcGxhY2UgPyByZXBsYWNlIDogaW5kZXggKyAxO1xuICAgIH0pO1xuICAvLyBPdXRwdXQgdG8gY29uc29sZSBzbyB5b3UgY2FuIGBzZWVgIHRoZSByZXN1bHRzXG4gIC8vIGNvbnNvbGUubG9nKGFyclJlc3VsdC5qb2luKCcsICcpKTtcbiAgcmV0dXJuIGFyclJlc3VsdDtcbn1cbiJdfQ==