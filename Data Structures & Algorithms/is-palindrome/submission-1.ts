class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const fixedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        console.log(fixedString);
        const middle = Math.round(fixedString.length / 2);
        const split = fixedString.slice(0, middle);
        console.log(Math.floor(fixedString.length / 2), fixedString.length / 2)
        if (Math.floor(fixedString.length / 2) === fixedString.length / 2){
            const split2 = fixedString.slice(middle, fixedString.length);
            console.log(split2)
            const flipped = split2.split("").reverse().join("");
            if (flipped === split){
                return true;
            } else {
                return false;
            }
        } else {
            
            const split3 = fixedString.slice(middle - 1, fixedString.length);
            console.log(split3)
            const flipped = split3.split("").reverse().join("");
            if (flipped === split){
                return true;
            } else {
                return false;
            }
        }
    }
}
