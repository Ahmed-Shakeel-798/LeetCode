/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let myNums = nums;
    
    for (i = 0; i < myNums.length; i++){
        let diff = target - myNums[i];
        let j = myNums.indexOf(diff,i+1);
        if (j !== -1){
            return [i,j];
        }
    }
    
};

// using hashes
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumWithHashing = function(nums, target) {
    let hashObj = {};
    
    for (i = 0; i < nums.length; i++){
        let j = hashObj[target-nums[i]];
        if(j != undefined){
            return [j,i];
        }
        hashObj[nums[i]] = i;
    
    }
    
};