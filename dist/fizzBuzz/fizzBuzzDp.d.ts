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
export declare class Rule {
    operator: string;
    value: number;
    replacement: string;
    /**
     * @description Create a new rule
     * @param {RuleProps} props
     */
    constructor(props: RuleProps);
    /**
     * @description Apply rule to given number/ value
     * @param {number} num
     */
    apply(num: number): boolean;
}
/**
 * @description Base Strategy Class
 */
export declare class Strategy {
    protected rules: Array<Rule>;
    constructor(rules: Array<Rule>);
    /**
     * @description Create array, replacing values as outlined in strategy
     * @param {number} arrayLength
     */
    map(arrayLength: number): Array<number | string>;
}
/**
 * @description Context Class
 */
export declare class Context {
    private strategy;
    constructor(strategy?: Strategy);
    /**
     * @description Evaluate strategy against given array size
     * @param {number} arrayLength
     */
    evaluate(arrayLength?: number): (string | number)[];
}
export {};
