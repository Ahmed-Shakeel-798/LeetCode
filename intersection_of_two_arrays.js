/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    if(nums1 > nums2){
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    
    let myMap = new Map();
    for (num of nums1){
        myMap.set(num, (myMap.get(num) || 0) + 1);
    }

    let intersection = [];
    for(num of nums2){
        if(myMap.has(num) && myMap.get(num) > 0){
            intersection.push(num);
            myMap.set(num, myMap.get(num) - 1);
        }
    }

    console.log(intersection);

};

intersect([9,4,9,8,4], [4,9,5]);