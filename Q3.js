/* 
<aside>
💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

</aside>
*/

function findTarget(nums, target) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (nums[mid] === target) {
        return mid;
      }
  
      if (target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    // The target is not found in the array
    // Return the index where the target should be inserted
    return start;
  }
  
console.log(findTarget([1,3,5,6],5))