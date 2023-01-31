/**
 * @description Interface for user-defined rules
 */
export interface KeyWordMap {
    divisibleBy: number;
    replacement: string;
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
export default function (arrayLength?: number, map?: Array<KeyWordMap>): Array<number | string>;
