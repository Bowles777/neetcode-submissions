class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++){
            // if (target - nums[i])
            for (int j = 1; j < nums.length && i != j; j++) {
                if (nums[i] + nums[j] == target){
                    int[] sol = {i, j};
                    Arrays.sort(sol);
                    return sol;
                }
            }
        } 
        return null;
    }
}
