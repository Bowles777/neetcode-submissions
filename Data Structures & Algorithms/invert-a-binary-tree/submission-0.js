/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;

        // console.log(root.val); // Process current node
        [root.left, root.right] = [root.right, root.left];
        this.invertTree(root.left);      // Recurse left
        this.invertTree(root.right);   
        return root;
    }
}
