// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const findMaxIndex = function(nums) {
//     let maxIndex = 0;
//     for (const element in nums) {
//         if (nums[element] > nums[maxIndex]) {
//             maxIndex = element;
//         }
//     }
//     return maxIndex;
// }

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minimizeArrayValue = function(nums) {

//     const maxIndex = findMaxIndex(nums);

//     // base case 1: if left most is the max then return.
//     if(maxIndex === 0){
//         return nums[maxIndex];
//     }

//     let diff = Math.ceil((nums[maxIndex] - nums[maxIndex-1])/2);

//     nums[maxIndex]-=diff;
//     nums[maxIndex-1]+=diff;
//     return minimizeArrayValue(nums);
// };


// Optimized.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {

    let output = nums[0];

    let subArrayTotal = 0;
    let subArrayLength = 0;

    for(const integer of nums){
        subArrayLength+=1;
        subArrayTotal+=integer;
        let newOutput = Math.ceil(subArrayTotal/subArrayLength);
        console.log(nums);
        if(newOutput > output) {
            output = newOutput
        }
    }

    return output;
}

console.log(minimizeArrayValue([3,7,1,6]));
console.log(minimizeArrayValue([13,13,20,0,8,9,9]));
