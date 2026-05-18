class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            const dif = target - nums[i];
            if (seen.has(dif)){
                return [seen.get(dif), i];
            } else {
                seen.set(nums[i], i);
            }
        }
        return [];
    }
}
