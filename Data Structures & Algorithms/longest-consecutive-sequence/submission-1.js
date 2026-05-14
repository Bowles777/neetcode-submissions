class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const starters = new Map();
        const sorted = [...new Set(nums.sort((a, b) => a - b))];
        console.log(sorted);
        let currentHighest;
        let total = 0;
        for (let i = 0; i < sorted.length; i++) {
            if (!sorted.includes(sorted[i] - 1) && !starters.get(sorted[i])) {
                starters.set(sorted[i], 1);
                currentHighest = sorted[i];
                if (total === 0) {
                    total = 1
                }
            } else {
                const counter = starters.get(currentHighest) + 1;
                starters.set(currentHighest, counter);
                if (total < counter) {
                    total = counter;
                }
            }
        }
        console.log(starters)
        return total;
    }
}
