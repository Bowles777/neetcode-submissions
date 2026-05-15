class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        
        const length = nums.length;
        if (target === nums[length - 1]) {
            return length - 1;
        }
        const dif = length - (nums[length - 1] - target);
        for (let i = dif; i < length; i++) {
            if (nums[i] === target) {
                return i;
            }
        }
        return -1;
    }
}
