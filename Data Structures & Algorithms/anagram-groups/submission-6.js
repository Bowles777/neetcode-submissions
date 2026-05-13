class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //create map to store annograms
        const anagrams = new Map();

        //Sort through original array
        strs.map((i) => {
            const sorted = i.split("").sort().join("");
            // console.log(sorted);
            const arr = anagrams.get(sorted);
            if (arr) {
                arr.push(i);
                anagrams.set(sorted, arr);
            } else {
                anagrams.set(sorted, [i]);
            }
        });
        const result = [...anagrams].map(([key, val]) => val);
        return result;
        // return null;
    }
}
