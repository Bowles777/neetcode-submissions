class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hash = new Map<number, number>();
        for (const num of nums) {
            hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
        }

        const sortedHash = [...hash].sort((a, b) => b[1] - a[1]);

        const result: number[] = [];

        for (let i = 0; i < k; i++) {
            result.push(sortedHash[i][0]);
        }

        return result;
    }
}
