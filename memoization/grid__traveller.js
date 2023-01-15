/**
 * How many ways to traverse a n*m grid
 * - can only move right or down
 * - m,n is the size of grid being passed
 */
const memo = {};
const grid_traveller = (m, n) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m == 1 && n == 1) return 1;
    if(m == 0 || n == 0) return 0;

    memo[key] = grid_traveller(m-1, n) + grid_traveller(m, n-1); 
    return memo[key];
}
console.log(grid_traveller(18,18));
