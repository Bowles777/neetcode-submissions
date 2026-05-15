class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) { 
            return false;
        }
        const arr = s.split("");
        const stack = [];
        for(let i = 0; i < s.length; i++){
            if (this.isOpen(arr[i])) {
                stack.push(arr[i]);
            } else {
                console.log(stack);
                const last = stack.pop();
                if (!this.isOpposite(last, arr[i])){
                    return false;
                }
            }
        }
        if (stack.length > 0) {
            return false;
        }
        return true;
    }

    isOpen(bracket: string): boolean{
        console.log(bracket);
        if (bracket === "(" || bracket === "{" || bracket === "[") {
            return true;
        } else {
            return false;
        }
    }

    isOpposite(open: string, close: string): boolean{
        console.log(open, close);
        if (open === "(" && close === ")") {
            return true;
        } else if (open === "{" && close === "}") {
            return true;
        } else if (open === "[" && close === "]") {
            return true;
        } else {
            return false;
        }
    }
}
