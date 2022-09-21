/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let array = [];
     for (i = 0; i < nums.length; i ++){
         if(array.includes(nums[i])){
             return true;
         }
         
         array.push(nums[i]);
         
         if(array.length > k){
             array.splice(0,1);
         }
     }
     return false;
 };