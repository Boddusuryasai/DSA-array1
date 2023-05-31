/*

 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][
 */


    //Brute force
    function findIndices(nums,target){  
       for(let i =0;i<nums.length;i++){
        let start=nums[i]
        for(let j=i+1;j<nums.length;j++){
             if( start+nums[j]===target){
                return [i,j]
             }
        }
       }
    }

    //optimised

    function findIndices(nums, target) {
        const numsObj = {};
      
        for (let i = 0; i < nums.length; i++) {
          const diff = target - nums[i];
      
          if (diff in numsObj) {
            return [numsObj[diff], i];
          }
      
          numsObj[nums[i]] = i;
        }
      }
      