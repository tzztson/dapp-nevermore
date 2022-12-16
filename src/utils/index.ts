import { ethers } from "ethers";

/**
 * set delay for delayTimes
 * @param {Number} delayTimes - timePeriod for delay
 */
export const delay = (delayTimes: number) => {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve(2);
        }, delayTimes);
    });
};

/**
 * change data type from Number to BigNum
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
export const toBigNum = (value: number | string, d = 18) => {
    return ethers.utils.parseUnits(String(value), d);
};

/**
 * change data type from BigNum to Number
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
export const fromBigNum = (value: number | string, d = 18) => {
    return ethers.utils.formatUnits(value, d);
};
