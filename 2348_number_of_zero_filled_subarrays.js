/**
* @param {number[]} nums
* @return {number}
*/
var zeroFilledSubarray = function(nums) {

let continousZeros = 0;
let result = 0;

for(let num of nums) {
    if(num == 0) {
        continousZeros+=1;
        result = result + continousZeros;
    }else{
        continousZeros=0;
    }
}

return result;
};

console.log(zeroFilledSubarray([0,0,0,0,0,0]));