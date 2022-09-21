/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    let array = [];
    for ( i = 0 ; i < nums.length ; i++){
        array = [];
        array.push(nums[i]);
        for (j = i+1; j < nums.length; j ++){
            array.push(nums[j]);
            if(Math.abs(array[0] - array[array.length-1]) <= valueDiff){
                return true;
            }
            if(array.length > indexDiff){
                break;
            }
            
        }
    }
    return false;
};