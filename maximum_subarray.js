/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max_sum = nums[0];
    
    let array = [nums[0]];
    let sum_of_array = array[0];
    
    for ( i = 1; i < nums.length; i++){
        array.push(nums[i]);
        sum_of_array = sum_of_array + nums[i];
        
        let current_sum;
        
        if(sum_of_array < nums[i]){
            current_sum = nums[i];
            array = [nums[i]];
            sum_of_array = array[0];
        }else {
            current_sum = sum_of_array;
        }
        
        if(max_sum<current_sum){
            max_sum = current_sum;
        }
    }
    return max_sum;
};