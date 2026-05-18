class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // for (let i = 0; i < numbers.length; i++) {
        //     const n = numbers.length - i;
        //     if (numbers[i] +  numbers[n - 1] > target) {

        //     }
        // }
        let i = 0;
        let n = numbers.length - 1;
        while (i < n) {
            const curSum = numbers[i] + numbers[n];
                if (curSum > target) {
                    n = n - 1;
                } else if (curSum < target) {
                    i = i + 1;
                } else {
                    return [i + 1, n + 1];
                }
            
        } 
        return [];
    }
}
