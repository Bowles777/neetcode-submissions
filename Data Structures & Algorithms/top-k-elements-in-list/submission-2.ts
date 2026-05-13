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

        // 1. Find min and max values to determine the range
        const newMap = [...hash.values()];
        const min = Math.min(...newMap);
        const max = Math.max(...newMap);

        // 2. Create buckets
        const bucketCount = Math.floor((max - min) / hash.size) + 1;
        const buckets = Array.from({ length: bucketCount }, () => []);

        // 3. Distribute elements into buckets (Scatter)
        hash.forEach((val) => {
            const bucketIndex = Math.floor((val - min) / hash.size);
            buckets[bucketIndex].push(val);
        });

        // 4. Sort each bucket and concatenate (Gather)
        const sorted = buckets.reduce((acc, bucket) => {
            // Standard sort() or a custom Insertion Sort can be used here
            return [...acc, ...bucket.sort((a, b) => b - a)];
        }, []);

        // console.log(sorted, bucket);

        // iterate over the first k numbers
        const solution = [];
        for (let i = 0; i < k; i++) {
            hash.forEach((frequency, key) => {
                if (hash.get(key) === sorted[i] && !solution.includes(key)) {
                    solution.push(key);
                }
            });
        }
        return solution;
    }
}
