{/* <aside>
💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

</aside> */}
function moveZeroes(nums) {
    let j = 0; // Pointer to track the next nonzero element position
  
    // Move all nonzero elements to their correct positions
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[j] = nums[i];
        j++;
      }
    }
  
    // Fill the remaining positions with zeros
    for (let i = j; i < nums.length; i++) {
      nums[i] = 0;
    }
  }
  