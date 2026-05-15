class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minDay = prices[0];
        let maxProfit = 0;
        for(let i = 1; i < prices.length; i++) {
            if (prices[i] < minDay) {
                minDay = prices[i];
            } else if (maxProfit < prices[i] - minDay) {
                maxProfit = prices[i] - minDay;
            }
        }
        return maxProfit;
    }
}
