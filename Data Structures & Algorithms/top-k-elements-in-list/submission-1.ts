class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const bucket = new Map<number, number>();
        nums.map((n) => {
            const num = bucket.get(n);
            if (num) {
                bucket.set(n, num + 1);
            } else {
                bucket.set(n, 1);
            }
        });

        // 1. Find min and max values to determine the range
        const newMap = [...bucket.values()];
        const min = Math.min(...newMap);
        const max = Math.max(...newMap);

        // 2. Create buckets
        const bucketCount = Math.floor((max - min) / bucket.size) + 1;
        const buckets = Array.from({ length: bucketCount }, () => []);

        // 3. Distribute elements into buckets (Scatter)
        bucket.forEach((val) => {
            const bucketIndex = Math.floor((val - min) / bucket.size);
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
            bucket.forEach((frequency, key) => {
                if (bucket.get(key) === sorted[i] && !solution.includes(key)) {
                    solution.push(key);
                }
            });
        }
        return solution;
    }
}
