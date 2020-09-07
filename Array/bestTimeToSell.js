/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let low = Number.POSITIVE_INFINITY,
        high = Number.NEGATIVE_INFINITY;
    let profit = 0;
    let i = 0;

    while (i < prices.length) {
        if (high > prices[i]) {
            //         console.log(low, high);
            profit += high - low;
            low = Number.POSITIVE_INFINITY, high = Number.NEGATIVE_INFINITY;
            i--;
        } else if (low > prices[i]) {
            low = prices[i];
        } else if (low < prices[i] && high < prices[i]) {
            high = prices[i];
            if (i == prices.length - 1) profit += high - low;
        }
        i++;
    }
    return profit;
};

console.log(maxProfit([1,9,6,9,1,7,1,1,5,9,9,9]));