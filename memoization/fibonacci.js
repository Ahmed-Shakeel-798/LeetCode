/**
 * Finding fibonacci number at a place x using memoization 
 */
const mem = {};
const fib = (n) => {
    if(n in mem) return mem[n];
    if(n <= 2) return 1;
    
    mem[n] = fib(n-1) + fib(n-2);
    return mem[n];
}
console.log(fib(50));
