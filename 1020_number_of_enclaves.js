function explore(x, y, grid, visitedMap) {
    console.log("Current cooridnates: " + JSON.stringify({x: x, y: y}));
    console.log(visitedMap);

    // if already visited
    if(visitedMap.has(x + ',' + y)) {
        return 'visited';
    }
    
    // if out of bounds return 0
    if(x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) {
        return 'notEnclave';
    }

    // if water 
    if(grid[y][x] === 0){
        return 'water';
    }

    visitedMap.add(x + ',' + y);

    const leftResult = explore(x-1, y, grid, visitedMap);
    const rightResult = explore(x+1, y, grid, visitedMap);
    const upResult = explore(x, y-1, grid, visitedMap);
    const downResult = explore(x, y+1, grid, visitedMap);
    
    let enclaveCount = 1;
    const resultsArray = [leftResult, rightResult, upResult, downResult];
    
    for(const result of resultsArray) {
        if(result === 'notEnclave'){
            return 'notEnclave';
        }

        if(Number.isInteger(result)){
            enclaveCount+=result;
        }
    }

    return enclaveCount;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    if(grid.length <= 0 && grid[0].length <= 0){
        return 0;
    }

    let enclaves = 0;

    let visitedMap = new Set();

    for(let y in grid) {
        for(let x in grid[y]){
            if(grid[y][x] === 0 || visitedMap.has(x + ',' + y)){
                continue;
            }
            console.log("-------------");
            const result = explore(Number(x), Number(y), grid, visitedMap); 
            if(Number.isInteger(result)) {
                enclaves+=result;
            }
        }
    }

    return enclaves;
};

const mainArray = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];

console.log(numEnclaves(mainArray));