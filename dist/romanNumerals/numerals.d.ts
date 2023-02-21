/**
 * @description Strategy Abstract Class, strategy pattern.
 */
declare abstract class Strategy {
    inputType: string;
    abstract convert(input: string | number): string | number;
    abstract validate(input: string | number): void;
}
/**
 * @description Context class, context pattern.
 */
declare class Context {
    private strategies;
    /**
     * @description Create a new Context, adding known strategies to this.strategies
     */
    constructor(strategies: Array<Strategy>);
    /**
     * @description Get the matching strategy based upon the input type
     * @param input
     * @returns {Strategy | undefined}
     */
    getMatchingStrategy(input: string | number): Strategy | undefined;
    /**
     * @description Convert the input based upon the matching strategy
     * @param input
     * @returns {string | number}
     *
     */
    convert(input: string | number): string | number;
}
/**
 * @description Context Builder, builder pattern. Honestly, not needed for this example,
 *   but I wanted to show how it could be used.
 */
export declare class ContextBuilder {
    private strategies;
    /**
     * @description Add ConvertFromRomanNumerals strategy to the Context
     * @returns {ContextBuilder}
     */
    withConvertFromRomanNumerals(): ContextBuilder;
    /**
     * @description Add ConvertToRomanNumerals strategy to the Context
     * @returns {ContextBuilder}
     */
    withConvertToRomanNumerals(): ContextBuilder;
    /**
     * @description Create Context
     * @returns {Context}
     */
    build(): Context;
}
export {};
