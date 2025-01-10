/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);

    const resultsArray = [];

    for(const spell of spells) {
        resultsArray.push(returnSuccessCount(spell, potions));
        console.log(resultsArray);
    }

    function returnSuccessCount(spell, potions) {

        let leftIndex = 0;
        let rightIndex = potions.length-1;

        while(leftIndex < rightIndex) {
            const midIndex = Math.floor((rightIndex + leftIndex)/2);
            if(spell*potions[midIndex] >= success) {
                rightIndex = midIndex;
            }else{
                leftIndex = midIndex + 1;
            }
        }

        if(spell*potions[leftIndex] >= success){
            return potions.length - leftIndex;
        }else{
            return potions.length - (leftIndex+1);
        }
    }

    return resultsArray;
};

const spells = [];
const potions = [];

successfulPairs(spells, potions, 100);