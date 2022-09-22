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