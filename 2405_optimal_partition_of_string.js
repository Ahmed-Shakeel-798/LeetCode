/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    var substringCount = 1;
    var currentString = '';

    for (const letter of s) {
        if(currentString.includes(letter)){
            currentString = letter;
            substringCount+=1;
        }else{
            currentString+=letter;
        }
    }

    return substringCount;

};

console.log(partitionString("ababcaacb"));
console.log(partitionString("sssssss"));