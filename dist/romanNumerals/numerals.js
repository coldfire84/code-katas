"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextBuilder = void 0;
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
class Strategy {
}
/**
 * @description Convert from Roman Numerals Strategy, strategy pattern.
 */
class ConvertFromRomanNumerals extends Strategy {
    constructor() {
        super(...arguments);
        this.inputType = 'string';
    }
    /**
     * @description Validate the input
     * @param input
     */
    validate(input) {
        // Test input against strict Roman Numeral regex
        //  source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
        const regex = new RegExp(/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/gm);
        if (!regex.test(input)) {
            throw new Error('Input is not a valid Roman Numeral');
        }
    }
    /**
     * @description Convert the input to a number
     * @param input
     * @returns
     */
    convert(input) {
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
    constructor() {
        super(...arguments);
        this.inputType = 'number';
    }
    /**
     * @description Validate the input
     * @param input
     */
    validate(input) {
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
    convert(input) {
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
    /**
     * @description Create a new Context, adding known strategies to this.strategies
     */
    constructor(strategies) {
        this.strategies = [];
        this.strategies = strategies;
    }
    /**
     * @description Get the matching strategy based upon the input type
     * @param input
     * @returns {Strategy | undefined}
     */
    getMatchingStrategy(input) {
        let matchingStrategy;
        this.strategies.forEach((strategy) => {
            if (typeof input === strategy.inputType)
                matchingStrategy = strategy;
        });
        return matchingStrategy;
    }
    /**
     * @description Convert the input based upon the matching strategy
     * @param input
     * @returns {string | number}
     *
     */
    convert(input) {
        const strategy = this.getMatchingStrategy(input);
        if (!strategy)
            throw new Error('No matching strategy found');
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
class ContextBuilder {
    constructor() {
        this.strategies = [];
    }
    /**
     * @description Add ConvertFromRomanNumerals strategy to the Context
     * @returns {ContextBuilder}
     */
    withConvertFromRomanNumerals() {
        this.strategies.push(new ConvertFromRomanNumerals());
        return this;
    }
    /**
     * @description Add ConvertToRomanNumerals strategy to the Context
     * @returns {ContextBuilder}
     */
    withConvertToRomanNumerals() {
        this.strategies.push(new ConvertToRomanNumerals());
        return this;
    }
    /**
     * @description Create Context
     * @returns {Context}
     */
    build() {
        return new Context(this.strategies);
    }
}
exports.ContextBuilder = ContextBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm9tYW5OdW1lcmFscy9udW1lcmFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNILE1BQU0sYUFBYSxHQUFHO0lBQ3BCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzVCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzVCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzVCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzVCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO0NBQzNCLENBQUM7QUFDRjs7R0FFRztBQUNILE1BQWUsUUFBUTtDQUl0QjtBQUNEOztHQUVHO0FBQ0gsTUFBTSx3QkFBeUIsU0FBUSxRQUFR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QUN6QiwrQkFBK0I7UUFDL0IsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQUNEOzs7R0FHRztBQUNILE1BQWEsY0FBYztJQUEzQjtRQUNVLGVBQVUsR0FBb0IsRUFBRSxDQUFDO0lBd0IzQyxDQUFDO0lBdkJDOzs7T0FHRztJQUNILDRCQUE0QjtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHdCQUF3QixFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRDs7O09BR0c7SUFDSCwwQkFBMEI7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsS0FBSztRQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjtBQXpCRCx3Q0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyBrZXkgUm9tYW4gTnVtZXJhbCB2YWx1ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgbnVtYmVyLlxuICovXG5jb25zdCByb21hbk51bWVyYWxzID0gW1xuICB7IHZhbHVlOiAxMDAwLCBudW1lcmFsOiAnTScgfSxcbiAgeyB2YWx1ZTogOTAwLCBudW1lcmFsOiAnQ00nIH0sXG4gIHsgdmFsdWU6IDUwMCwgbnVtZXJhbDogJ0QnIH0sXG4gIHsgdmFsdWU6IDQwMCwgbnVtZXJhbDogJ0NEJyB9LFxuICB7IHZhbHVlOiAxMDAsIG51bWVyYWw6ICdDJyB9LFxuICB7IHZhbHVlOiA5MCwgbnVtZXJhbDogJ1hDJyB9LFxuICB7IHZhbHVlOiA1MCwgbnVtZXJhbDogJ0wnIH0sXG4gIHsgdmFsdWU6IDQwLCBudW1lcmFsOiAnWEwnIH0sXG4gIHsgdmFsdWU6IDEwLCBudW1lcmFsOiAnWCcgfSxcbiAgeyB2YWx1ZTogOSwgbnVtZXJhbDogJ0lYJyB9LFxuICB7IHZhbHVlOiA1LCBudW1lcmFsOiAnVicgfSxcbiAgeyB2YWx1ZTogNCwgbnVtZXJhbDogJ0lWJyB9LFxuICB7IHZhbHVlOiAxLCBudW1lcmFsOiAnSScgfSxcbl07XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTdHJhdGVneSBBYnN0cmFjdCBDbGFzcywgc3RyYXRlZ3kgcGF0dGVybi5cbiAqL1xuYWJzdHJhY3QgY2xhc3MgU3RyYXRlZ3kge1xuICBwdWJsaWMgaW5wdXRUeXBlOiBzdHJpbmc7XG4gIGFic3RyYWN0IGNvbnZlcnQoaW5wdXQ6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlcjtcbiAgYWJzdHJhY3QgdmFsaWRhdGUoaW5wdXQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQ7XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0IGZyb20gUm9tYW4gTnVtZXJhbHMgU3RyYXRlZ3ksIHN0cmF0ZWd5IHBhdHRlcm4uXG4gKi9cbmNsYXNzIENvbnZlcnRGcm9tUm9tYW5OdW1lcmFscyBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgaW5wdXRUeXBlID0gJ3N0cmluZyc7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGUgdGhlIGlucHV0XG4gICAqIEBwYXJhbSBpbnB1dFxuICAgKi9cbiAgdmFsaWRhdGUoaW5wdXQ6IHN0cmluZykge1xuICAgIC8vIFRlc3QgaW5wdXQgYWdhaW5zdCBzdHJpY3QgUm9tYW4gTnVtZXJhbCByZWdleFxuICAgIC8vICBzb3VyY2U6IGh0dHBzOi8vd3d3Lm9yZWlsbHkuY29tL2xpYnJhcnkvdmlldy9yZWd1bGFyLWV4cHJlc3Npb25zLWNvb2tib29rLzk3ODA1OTY4MDI4MzcvY2gwNnMwOS5odG1sXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgL14oPz1bTURDTFhWSV0pTSooQ1tNRF18RD9DezAsM30pKFhbQ0xdfEw/WHswLDN9KShJW1hWXXxWP0l7MCwzfSkkL2dtXG4gICAgKTtcbiAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGlzIG5vdCBhIHZhbGlkIFJvbWFuIE51bWVyYWwnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0IHRoZSBpbnB1dCB0byBhIG51bWJlclxuICAgKiBAcGFyYW0gaW5wdXRcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnZlcnQoaW5wdXQ6IHN0cmluZykge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHJvbWFuTnVtZXJhbHMuZm9yRWFjaCgocm9tYW5OdW1lcmFsKSA9PiB7XG4gICAgICB3aGlsZSAoaW5wdXQuaW5kZXhPZihyb21hbk51bWVyYWwubnVtZXJhbCkgPT09IDApIHtcbiAgICAgICAgcmVzdWx0ICs9IHJvbWFuTnVtZXJhbC52YWx1ZTtcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKHJvbWFuTnVtZXJhbC5udW1lcmFsLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUm9tYW4gTnVtZXJhbHMgU3RyYXRlZ3ksIHN0cmF0ZWd5IHBhdHRlcm4uXG4gKi9cbmNsYXNzIENvbnZlcnRUb1JvbWFuTnVtZXJhbHMgZXh0ZW5kcyBTdHJhdGVneSB7XG4gIGlucHV0VHlwZSA9ICdudW1iZXInO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFZhbGlkYXRlIHRoZSBpbnB1dFxuICAgKiBAcGFyYW0gaW5wdXRcbiAgICovXG4gIHZhbGlkYXRlKGlucHV0OiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBpcyBub3QgYSB2YWxpZCBudW1iZXInKTtcbiAgICB9XG4gICAgaWYgKGlucHV0IDwgMSB8fCBpbnB1dCA+IDM5OTkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgaXMgbm90IGEgdmFsaWQgbnVtYmVyIGJldHdlZW4gMSBhbmQgMzk5OScpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnZlcnQgdGhlIGlucHV0IHRvIGEgUm9tYW4gTnVtZXJhbFxuICAgKiBAcGFyYW0gaW5wdXRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNvbnZlcnQoaW5wdXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIHJvbWFuTnVtZXJhbHMuZm9yRWFjaCgocm9tYW5OdW1lcmFsKSA9PiB7XG4gICAgICB3aGlsZSAoaW5wdXQgPj0gcm9tYW5OdW1lcmFsLnZhbHVlKSB7XG4gICAgICAgIHJlc3VsdCArPSByb21hbk51bWVyYWwubnVtZXJhbDtcbiAgICAgICAgLy8gU3VidHJhY3QgdGhlIHZhbHVlIG9mIHRoZSBSb21hbiBOdW1lcmFsIGZyb20gdGhlIGlucHV0XG4gICAgICAgIGlucHV0IC09IHJvbWFuTnVtZXJhbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDb250ZXh0IGNsYXNzLCBjb250ZXh0IHBhdHRlcm4uXG4gKi9cbmNsYXNzIENvbnRleHQge1xuICBwcml2YXRlIHN0cmF0ZWdpZXM6IEFycmF5PFN0cmF0ZWd5PiA9IFtdO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBDb250ZXh0LCBhZGRpbmcga25vd24gc3RyYXRlZ2llcyB0byB0aGlzLnN0cmF0ZWdpZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0cmF0ZWdpZXM6IEFycmF5PFN0cmF0ZWd5Pikge1xuICAgIHRoaXMuc3RyYXRlZ2llcyA9IHN0cmF0ZWdpZXM7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIG1hdGNoaW5nIHN0cmF0ZWd5IGJhc2VkIHVwb24gdGhlIGlucHV0IHR5cGVcbiAgICogQHBhcmFtIGlucHV0XG4gICAqIEByZXR1cm5zIHtTdHJhdGVneSB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHB1YmxpYyBnZXRNYXRjaGluZ1N0cmF0ZWd5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIpOiBTdHJhdGVneSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IG1hdGNoaW5nU3RyYXRlZ3k6IFN0cmF0ZWd5IHwgdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RyYXRlZ2llcy5mb3JFYWNoKChzdHJhdGVneSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gc3RyYXRlZ3kuaW5wdXRUeXBlKSBtYXRjaGluZ1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoaW5nU3RyYXRlZ3k7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0IHRoZSBpbnB1dCBiYXNlZCB1cG9uIHRoZSBtYXRjaGluZyBzdHJhdGVneVxuICAgKiBAcGFyYW0gaW5wdXRcbiAgICogQHJldHVybnMge3N0cmluZyB8IG51bWJlcn1cbiAgICpcbiAgICovXG4gIHB1YmxpYyBjb252ZXJ0KGlucHV0OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5nZXRNYXRjaGluZ1N0cmF0ZWd5KGlucHV0KTtcbiAgICBpZiAoIXN0cmF0ZWd5KSB0aHJvdyBuZXcgRXJyb3IoJ05vIG1hdGNoaW5nIHN0cmF0ZWd5IGZvdW5kJyk7XG4gICAgLy8gVmFsaWRhdGUgdGhlIGlucHV0XG4gICAgc3RyYXRlZ3kudmFsaWRhdGUoaW5wdXQpO1xuICAgIC8vIENvbnZlcnQgYW5kIHJldHVybiB0aGUgaW5wdXRcbiAgICByZXR1cm4gc3RyYXRlZ3kuY29udmVydChpbnB1dCk7XG4gIH1cbn1cbi8qKlxuICogQGRlc2NyaXB0aW9uIENvbnRleHQgQnVpbGRlciwgYnVpbGRlciBwYXR0ZXJuLiBIb25lc3RseSwgbm90IG5lZWRlZCBmb3IgdGhpcyBleGFtcGxlLFxuICogICBidXQgSSB3YW50ZWQgdG8gc2hvdyBob3cgaXQgY291bGQgYmUgdXNlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRCdWlsZGVyIHtcbiAgcHJpdmF0ZSBzdHJhdGVnaWVzOiBBcnJheTxTdHJhdGVneT4gPSBbXTtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBZGQgQ29udmVydEZyb21Sb21hbk51bWVyYWxzIHN0cmF0ZWd5IHRvIHRoZSBDb250ZXh0XG4gICAqIEByZXR1cm5zIHtDb250ZXh0QnVpbGRlcn1cbiAgICovXG4gIHdpdGhDb252ZXJ0RnJvbVJvbWFuTnVtZXJhbHMoKTogQ29udGV4dEJ1aWxkZXIge1xuICAgIHRoaXMuc3RyYXRlZ2llcy5wdXNoKG5ldyBDb252ZXJ0RnJvbVJvbWFuTnVtZXJhbHMoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBZGQgQ29udmVydFRvUm9tYW5OdW1lcmFscyBzdHJhdGVneSB0byB0aGUgQ29udGV4dFxuICAgKiBAcmV0dXJucyB7Q29udGV4dEJ1aWxkZXJ9XG4gICAqL1xuICB3aXRoQ29udmVydFRvUm9tYW5OdW1lcmFscygpOiBDb250ZXh0QnVpbGRlciB7XG4gICAgdGhpcy5zdHJhdGVnaWVzLnB1c2gobmV3IENvbnZlcnRUb1JvbWFuTnVtZXJhbHMoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgQ29udGV4dFxuICAgKiBAcmV0dXJucyB7Q29udGV4dH1cbiAgICovXG4gIGJ1aWxkKCk6IENvbnRleHQge1xuICAgIHJldHVybiBuZXcgQ29udGV4dCh0aGlzLnN0cmF0ZWdpZXMpO1xuICB9XG59XG4iXX0=