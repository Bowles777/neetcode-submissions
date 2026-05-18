class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /// first get a sorted array 
        const sorted = nums.sort((a,b) => a - b);
        const triplets = [];

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] > 0) break;
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;

            // const target = -sorted[i];
            let j = i + 1;
            let k = sorted.length - 1;
            while (j < k) {
                const curSum = sorted[i] + sorted[j] + sorted[k];
                if (curSum > 0) {
                    k--;
                } else if (curSum < 0) {
                    j++;
                } else {
                    triplets.push([sorted[i], sorted[j], sorted[k]]);
                    j++;
                    k--;
                    while (j < k && sorted[j] === sorted[j - 1]) {
                        j++;
                    }
                }
            }
        }
        return triplets;
    }
}
