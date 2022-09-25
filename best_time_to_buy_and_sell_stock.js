// TWO POINTER SOLUTION

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let b = 0;
    let s = 1;
    let maxP = 0;

    while(s < prices.length){
        if(prices[b] < prices[s]){
            let diff = prices[s] - prices[b];
            maxP = diff > maxP ? diff : maxP;
        }else{
            b = s;
        }
        s++
    }
    console.log(maxP);
};

maxProfit([1,2,4,2,5,7,2,4,9,0,9]);