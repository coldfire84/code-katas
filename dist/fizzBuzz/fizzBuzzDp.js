"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.Strategy = exports.Rule = void 0;
/**
 * @description Rule Base class
 */
class Rule {
    /**
     * @description Create a new rule
     * @param {RuleProps} props
     */
    constructor(props) {
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
        if (isNaN(props.value))
            throw new Error(`'value' must be a 'number'`);
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
    apply(num) {
        const mathOperators = {
            '%': (a, b) => a % b === 0,
            // '*': (a: number, b: number) => a * b === 0,
        };
        return mathOperators[this.operator](num, this.value);
    }
}
exports.Rule = Rule;
/**
 * @description Base Strategy Class
 */
class Strategy {
    constructor(rules) {
        // Perform validation on supplied rules
        this.rules = rules;
    }
    /**
     * @description Create array, replacing values as outlined in strategy
     * @param {number} arrayLength
     */
    map(arrayLength) {
        // Sort rules
        const sortedRules = this.rules.sort((a, b) => {
            return a.value - b.value;
        });
        const arrResult = Array(arrayLength)
            .fill(0)
            .map((val, index) => {
            const replace = sortedRules.reduce((acc, rule) => {
                // Check if `index+1` is divisible by `rule.divisibleBy`
                // Use `index +1` for equality, `value` of this index is `0` from Array.fill
                if (rule.apply(index + 1))
                    acc += rule.replacement;
                // Return accumulator once all rules checked
                return acc;
            }, '');
            return replace ? replace : index + 1;
        });
        return arrResult;
    }
}
exports.Strategy = Strategy;
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
class Context {
    constructor(strategy = defaultStrategy) {
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
        if (isNaN(arrayLength))
            throw new Error('`arrLength` must be a number');
        if (arrayLength === 0)
            throw new Error('`arrLength` should be > 0');
        return this.strategy.map(arrayLength);
    }
}
exports.Context = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml6ekJ1enpEcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maXp6QnV6ei9maXp6QnV6ekRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVFBOztHQUVHO0FBQ0gsTUFBYSxJQUFJO0lBSWY7OztPQUdHO0lBQ0gsWUFBWSxLQUFnQjtRQUMxQix1QkFBdUI7UUFDdkIsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQzdELElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUMxRCxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssU0FBUztZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDaEUsa0NBQWtDO1FBQ2xDLElBQUksT0FBTyxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVE7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ2pELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDdEUsSUFBSSxPQUFPLEtBQUssQ0FBQyxXQUFXLEtBQUssUUFBUTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsR0FBVztRQUNmLE1BQU0sYUFB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ZmFjZVxuICovXG5pbnRlcmZhY2UgUnVsZVByb3BzIHtcbiAgb3BlcmF0b3I6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgcmVwbGFjZW1lbnQ6IHN0cmluZztcbn1cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJ1bGUgQmFzZSBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgUnVsZSB7XG4gIHB1YmxpYyBvcGVyYXRvcjogc3RyaW5nO1xuICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcbiAgcHVibGljIHJlcGxhY2VtZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IHJ1bGVcbiAgICogQHBhcmFtIHtSdWxlUHJvcHN9IHByb3BzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUnVsZVByb3BzKSB7XG4gICAgLy8gQ2hlY2sgcmVxdWlyZWQgcHJvcHNcbiAgICBpZiAocHJvcHMub3BlcmF0b3IgPT09IHVuZGVmaW5lZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUnVsZSBtdXN0IGNvbnRhaW4gYSAnb3BlcmF0b3InIHByb3BlcnR5YCk7XG4gICAgaWYgKHByb3BzLnZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bGUgbXVzdCBjb250YWluIGEgJ3ZhbHVlJyBwcm9wZXJ0eWApO1xuICAgIGlmIChwcm9wcy5yZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSdWxlIG11c3QgY29udGFpbiBhICdyZXBsYWNlbWVudCcgcHJvcGVydHlgKTtcbiAgICAvLyBDaGVjayBzdXBwbGllZCB2YWx1ZXMgYXJlIHZhbGlkXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5vcGVyYXRvciAhPT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG9wZXJhdG9yIG11c3QgYmUgYSAnc3RyaW5nJ2ApO1xuICAgIGlmIChpc05hTihwcm9wcy52YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgJ3ZhbHVlJyBtdXN0IGJlIGEgJ251bWJlcidgKTtcbiAgICBpZiAodHlwZW9mIHByb3BzLnJlcGxhY2VtZW50ICE9PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgcmVwbGFjZW1lbnQgbXVzdCBiZSBhICdzdHJpbmcnYCk7XG4gICAgLy8gU2V0IHByb3BlcnRpZXNcbiAgICB0aGlzLm9wZXJhdG9yID0gcHJvcHMub3BlcmF0b3I7XG4gICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIHRoaXMucmVwbGFjZW1lbnQgPSBwcm9wcy5yZXBsYWNlbWVudDtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFwcGx5IHJ1bGUgdG8gZ2l2ZW4gbnVtYmVyLyB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gICAqL1xuICBhcHBseShudW06IG51bWJlcikge1xuICAgIGNvbnN0IG1hdGhPcGVyYXRvcnMgPSB7XG4gICAgICAnJSc6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAlIGIgPT09IDAsXG4gICAgICAvLyAnKic6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAqIGIgPT09IDAsXG4gICAgfTtcbiAgICByZXR1cm4gbWF0aE9wZXJhdG9yc1t0aGlzLm9wZXJhdG9yIGFzIGtleW9mIHR5cGVvZiBtYXRoT3BlcmF0b3JzXShcbiAgICAgIG51bSxcbiAgICAgIHRoaXMudmFsdWVcbiAgICApO1xuICB9XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBCYXNlIFN0cmF0ZWd5IENsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJhdGVneSB7XG4gIHByb3RlY3RlZCBydWxlczogQXJyYXk8UnVsZT47XG4gIGNvbnN0cnVjdG9yKHJ1bGVzOiBBcnJheTxSdWxlPikge1xuICAgIC8vIFBlcmZvcm0gdmFsaWRhdGlvbiBvbiBzdXBwbGllZCBydWxlc1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhcnJheSwgcmVwbGFjaW5nIHZhbHVlcyBhcyBvdXRsaW5lZCBpbiBzdHJhdGVneVxuICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlMZW5ndGhcbiAgICovXG4gIG1hcChhcnJheUxlbmd0aDogbnVtYmVyKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XG4gICAgLy8gU29ydCBydWxlc1xuICAgIGNvbnN0IHNvcnRlZFJ1bGVzID0gdGhpcy5ydWxlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3QgYXJyUmVzdWx0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gQXJyYXkoYXJyYXlMZW5ndGgpXG4gICAgICAuZmlsbCgwKVxuICAgICAgLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZXBsYWNlID0gc29ydGVkUnVsZXMucmVkdWNlKChhY2MsIHJ1bGUpID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBgaW5kZXgrMWAgaXMgZGl2aXNpYmxlIGJ5IGBydWxlLmRpdmlzaWJsZUJ5YFxuICAgICAgICAgIC8vIFVzZSBgaW5kZXggKzFgIGZvciBlcXVhbGl0eSwgYHZhbHVlYCBvZiB0aGlzIGluZGV4IGlzIGAwYCBmcm9tIEFycmF5LmZpbGxcbiAgICAgICAgICBpZiAocnVsZS5hcHBseShpbmRleCArIDEpKSBhY2MgKz0gcnVsZS5yZXBsYWNlbWVudDtcbiAgICAgICAgICAvLyBSZXR1cm4gYWNjdW11bGF0b3Igb25jZSBhbGwgcnVsZXMgY2hlY2tlZFxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sICcnKTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2UgPyByZXBsYWNlIDogaW5kZXggKyAxO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGFyclJlc3VsdDtcbiAgfVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRGVmYXVsdCBGaXp6QnV6eiBzdHJhdGVneSwgcmVwbGFjZXMgYW55dGhpbmcgZGl2aXNpYmxlIGJ5IHRocmVlIHdpdGggYEZpenpgXG4gKiAgIGFuZCBhbnl0aGluZyBkaXZpc2libGUgYnkgZml2ZSB3aXRoIGBCdXp6YFxuICovXG5jb25zdCBkZWZhdWx0U3RyYXRlZ3kgPSBuZXcgU3RyYXRlZ3koW1xuICBuZXcgUnVsZSh7XG4gICAgb3BlcmF0b3I6ICclJyxcbiAgICB2YWx1ZTogMyxcbiAgICByZXBsYWNlbWVudDogJ0ZpenonLFxuICB9KSxcbiAgbmV3IFJ1bGUoe1xuICAgIG9wZXJhdG9yOiAnJScsXG4gICAgdmFsdWU6IDUsXG4gICAgcmVwbGFjZW1lbnQ6ICdCdXp6JyxcbiAgfSksXG5dKTtcbi8qKlxuICogQGRlc2NyaXB0aW9uIENvbnRleHQgQ2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICBwcml2YXRlIHN0cmF0ZWd5OiBTdHJhdGVneTtcbiAgY29uc3RydWN0b3Ioc3RyYXRlZ3k6IFN0cmF0ZWd5ID0gZGVmYXVsdFN0cmF0ZWd5KSB7XG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gICAgaWYgKCEoc3RyYXRlZ3kgaW5zdGFuY2VvZiBTdHJhdGVneSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BzdHJhdGVneWAgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBTdHJhdGVneScpO1xuICAgIC8vIFNldCBTdHJhdGVneVxuICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEV2YWx1YXRlIHN0cmF0ZWd5IGFnYWluc3QgZ2l2ZW4gYXJyYXkgc2l6ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlMZW5ndGhcbiAgICovXG4gIGV2YWx1YXRlKGFycmF5TGVuZ3RoID0gMTAwKSB7XG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gICAgaWYgKGlzTmFOKGFycmF5TGVuZ3RoKSkgdGhyb3cgbmV3IEVycm9yKCdgYXJyTGVuZ3RoYCBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgaWYgKGFycmF5TGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ2BhcnJMZW5ndGhgIHNob3VsZCBiZSA+IDAnKTtcbiAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5tYXAoYXJyYXlMZW5ndGgpO1xuICB9XG59XG4iXX0=