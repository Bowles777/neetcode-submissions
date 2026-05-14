class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<number, Set<string>>();
        const cols = new Map<number, Set<string>>();
        const squares = new Map<number, Set<string>>();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const num = board[row][col];

                if (num === ".") continue; // Skip empty cells

                // Calculate square index
                const squareIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                // Initialize sets if they don't exist
                if (!rows.has(row)) rows.set(row, new Set());
                if (!cols.has(col)) cols.set(col, new Set());
                if (!squares.has(squareIndex)) squares.set(squareIndex, new Set());

                // Check if number already exists in row, column, or square
                if (
                    rows.get(row)!.has(num) ||
                    cols.get(col)!.has(num) ||
                    squares.get(squareIndex)!.has(num)
                ) {
                    return false;
                }

                // Add number to all three sets
                rows.get(row)!.add(num);
                cols.get(col)!.add(num);
                squares.get(squareIndex)!.add(num);
            }
        }

        return true;
    }
}
