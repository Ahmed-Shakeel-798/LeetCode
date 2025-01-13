function explore(x, y, grid, visitedMap) {
    // out of bounds.
    if(x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) {
        return visitedMap;
    }

    // water or already visited.
    if(grid[y][x] === 0 || visitedMap.has(x + ',' + y)) {
        return visitedMap;
    }

    visitedMap.add(x + ',' + y);

    visitedMap = explore(x-1, y, grid, visitedMap);
    visitedMap = explore(x+1, y, grid, visitedMap);
    visitedMap = explore(x, y-1, grid, visitedMap);
    visitedMap = explore(x, y+1, grid, visitedMap);

    return visitedMap;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    if(grid.length <= 0 && grid[0].length <= 0){
        return 0;
    }

    let visitedMap = new Set();

    // for top row.
    let y = 0;
    for(let x in grid[y]){
        if(grid[y][x] === 0 || visitedMap.has(x + ',' + y)) {
            continue;
        }
        visitedMap = explore(Number(x), Number(y), grid, visitedMap);
    }

    // for bottom row.
    y = grid.length-1;
    for(let x in grid[y]){
        if(grid[y][x] === 0 || visitedMap.has(x + ',' + y)) {
            continue;
        }
        visitedMap = explore(Number(x), Number(y), grid, visitedMap);
    }

    // for left most column.
    let x = 0
    y = 0;
    for(let y in grid){
        if(grid[y][x] === 0 || visitedMap.has(x + ',' + y)) {
            continue;
        }
        visitedMap = explore(Number(x), Number(y), grid, visitedMap);
    }

    // for right most column.
    x = grid[0].length-1;
    y = 0;
    for(let y in grid){
        if(grid[y][x] === 0 || visitedMap.has(x + ',' + y)) {
            continue;
        }
        visitedMap = explore(Number(x), Number(y), grid, visitedMap);
    }

    let enclaves = 0;
    // except top and bottom row
    for(let y = 1; y < grid.length-1; y++){
        // excpet left most and right most column.
        for(let x = 1; x < grid[0].length-1; x++) {
            if(grid[y][x] === 1 && !visitedMap.has(x + ',' + y)) {
                enclaves+=1;
            }
        }
    }

    return enclaves;
};

const mainArray = [[0,0,0,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,1],[0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,1,1,1,1,1,0,0,1,0],[0,0,1,0,1,1,1,1,0,1],[0,1,1,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,1,0,1],[1,0,1,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1]];

for(let y in mainArray) {
    console.log(JSON.stringify(mainArray[y]));
}
console.log(numEnclaves(mainArray));