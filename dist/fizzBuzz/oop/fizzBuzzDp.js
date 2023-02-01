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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml6ekJ1enpEcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maXp6QnV6ei9vb3AvZml6ekJ1enpEcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQTs7R0FFRztBQUNILE1BQWEsSUFBSTtJQUlmOzs7T0FHRztJQUNILFlBQVksS0FBZ0I7UUFDMUIsdUJBQXVCO1FBQ3ZCLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUztZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVM7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2hFLGtDQUFrQztRQUNsQyxJQUFJLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNqRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksT0FBTyxLQUFLLENBQUMsV0FBVyxLQUFLLFFBQVE7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLEdBQVc7UUFDZixN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ZSBJbnRlcmZhY2VcbiAqL1xuaW50ZXJmYWNlIFJ1bGVQcm9wcyB7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHJlcGxhY2VtZW50OiBzdHJpbmc7XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBSdWxlIEJhc2UgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIFJ1bGUge1xuICBwdWJsaWMgb3BlcmF0b3I6IHN0cmluZztcbiAgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gIHB1YmxpYyByZXBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBydWxlXG4gICAqIEBwYXJhbSB7UnVsZVByb3BzfSBwcm9wc1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHM6IFJ1bGVQcm9wcykge1xuICAgIC8vIENoZWNrIHJlcXVpcmVkIHByb3BzXG4gICAgaWYgKHByb3BzLm9wZXJhdG9yID09PSB1bmRlZmluZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bGUgbXVzdCBjb250YWluIGEgJ29wZXJhdG9yJyBwcm9wZXJ0eWApO1xuICAgIGlmIChwcm9wcy52YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSdWxlIG11c3QgY29udGFpbiBhICd2YWx1ZScgcHJvcGVydHlgKTtcbiAgICBpZiAocHJvcHMucmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUnVsZSBtdXN0IGNvbnRhaW4gYSAncmVwbGFjZW1lbnQnIHByb3BlcnR5YCk7XG4gICAgLy8gQ2hlY2sgc3VwcGxpZWQgdmFsdWVzIGFyZSB2YWxpZFxuICAgIGlmICh0eXBlb2YgcHJvcHMub3BlcmF0b3IgIT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBvcGVyYXRvciBtdXN0IGJlIGEgJ3N0cmluZydgKTtcbiAgICBpZiAoaXNOYU4ocHJvcHMudmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYCd2YWx1ZScgbXVzdCBiZSBhICdudW1iZXInYCk7XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5yZXBsYWNlbWVudCAhPT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlcGxhY2VtZW50IG11c3QgYmUgYSAnc3RyaW5nJ2ApO1xuICAgIC8vIFNldCBwcm9wZXJ0aWVzXG4gICAgdGhpcy5vcGVyYXRvciA9IHByb3BzLm9wZXJhdG9yO1xuICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50ID0gcHJvcHMucmVwbGFjZW1lbnQ7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBcHBseSBydWxlIHRvIGdpdmVuIG51bWJlci8gdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICAgKi9cbiAgYXBwbHkobnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCBtYXRoT3BlcmF0b3JzID0ge1xuICAgICAgJyUnOiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgJSBiID09PSAwLFxuICAgICAgLy8gJyonOiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKiBiID09PSAwLFxuICAgIH07XG4gICAgcmV0dXJuIG1hdGhPcGVyYXRvcnNbdGhpcy5vcGVyYXRvciBhcyBrZXlvZiB0eXBlb2YgbWF0aE9wZXJhdG9yc10oXG4gICAgICBudW0sXG4gICAgICB0aGlzLnZhbHVlXG4gICAgKTtcbiAgfVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQmFzZSBTdHJhdGVneSBDbGFzc1xuICovXG5leHBvcnQgY2xhc3MgU3RyYXRlZ3kge1xuICBwcm90ZWN0ZWQgcnVsZXM6IEFycmF5PFJ1bGU+O1xuICBjb25zdHJ1Y3RvcihydWxlczogQXJyYXk8UnVsZT4pIHtcbiAgICAvLyBQZXJmb3JtIHZhbGlkYXRpb24gb24gc3VwcGxpZWQgcnVsZXNcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYXJyYXksIHJlcGxhY2luZyB2YWx1ZXMgYXMgb3V0bGluZWQgaW4gc3RyYXRlZ3lcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5TGVuZ3RoXG4gICAqL1xuICBtYXAoYXJyYXlMZW5ndGg6IG51bWJlcik6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xuICAgIC8vIFNvcnQgcnVsZXNcbiAgICBjb25zdCBzb3J0ZWRSdWxlcyA9IHRoaXMucnVsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEudmFsdWUgLSBiLnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IGFyclJlc3VsdDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IEFycmF5KGFycmF5TGVuZ3RoKVxuICAgICAgLmZpbGwoMClcbiAgICAgIC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmVwbGFjZSA9IHNvcnRlZFJ1bGVzLnJlZHVjZSgoYWNjLCBydWxlKSA9PiB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgYGluZGV4KzFgIGlzIGRpdmlzaWJsZSBieSBgcnVsZS5kaXZpc2libGVCeWBcbiAgICAgICAgICAvLyBVc2UgYGluZGV4ICsxYCBmb3IgZXF1YWxpdHksIGB2YWx1ZWAgb2YgdGhpcyBpbmRleCBpcyBgMGAgZnJvbSBBcnJheS5maWxsXG4gICAgICAgICAgaWYgKHJ1bGUuYXBwbHkoaW5kZXggKyAxKSkgYWNjICs9IHJ1bGUucmVwbGFjZW1lbnQ7XG4gICAgICAgICAgLy8gUmV0dXJuIGFjY3VtdWxhdG9yIG9uY2UgYWxsIHJ1bGVzIGNoZWNrZWRcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCAnJyk7XG4gICAgICAgIHJldHVybiByZXBsYWNlID8gcmVwbGFjZSA6IGluZGV4ICsgMTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhcnJSZXN1bHQ7XG4gIH1cbn1cbi8qKlxuICogQGRlc2NyaXB0aW9uIERlZmF1bHQgRml6ekJ1enogc3RyYXRlZ3ksIHJlcGxhY2VzIGFueXRoaW5nIGRpdmlzaWJsZSBieSB0aHJlZSB3aXRoIGBGaXp6YFxuICogICBhbmQgYW55dGhpbmcgZGl2aXNpYmxlIGJ5IGZpdmUgd2l0aCBgQnV6emBcbiAqL1xuY29uc3QgZGVmYXVsdFN0cmF0ZWd5ID0gbmV3IFN0cmF0ZWd5KFtcbiAgbmV3IFJ1bGUoe1xuICAgIG9wZXJhdG9yOiAnJScsXG4gICAgdmFsdWU6IDMsXG4gICAgcmVwbGFjZW1lbnQ6ICdGaXp6JyxcbiAgfSksXG4gIG5ldyBSdWxlKHtcbiAgICBvcGVyYXRvcjogJyUnLFxuICAgIHZhbHVlOiA1LFxuICAgIHJlcGxhY2VtZW50OiAnQnV6eicsXG4gIH0pLFxuXSk7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDb250ZXh0IENsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgcHJpdmF0ZSBzdHJhdGVneTogU3RyYXRlZ3k7XG4gIGNvbnN0cnVjdG9yKHN0cmF0ZWd5OiBTdHJhdGVneSA9IGRlZmF1bHRTdHJhdGVneSkge1xuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xuICAgIGlmICghKHN0cmF0ZWd5IGluc3RhbmNlb2YgU3RyYXRlZ3kpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgc3RyYXRlZ3lgIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgU3RyYXRlZ3knKTtcbiAgICAvLyBTZXQgU3RyYXRlZ3lcbiAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBFdmFsdWF0ZSBzdHJhdGVneSBhZ2FpbnN0IGdpdmVuIGFycmF5IHNpemVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5TGVuZ3RoXG4gICAqL1xuICBldmFsdWF0ZShhcnJheUxlbmd0aCA9IDEwMCkge1xuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xuICAgIGlmIChpc05hTihhcnJheUxlbmd0aCkpIHRocm93IG5ldyBFcnJvcignYGFyckxlbmd0aGAgbXVzdCBiZSBhIG51bWJlcicpO1xuICAgIGlmIChhcnJheUxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdgYXJyTGVuZ3RoYCBzaG91bGQgYmUgPiAwJyk7XG4gICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kubWFwKGFycmF5TGVuZ3RoKTtcbiAgfVxufVxuIl19