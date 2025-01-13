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

    let newVisitedMap = new Set();

    let landCount = 0;
    for(let y in grid) {
        for(let x in grid[0]) {
            if(grid[y][x] == 1) {
                landCount+=1;
                // run dfs if edge
                if(x==0 || x==grid[0].length-1 || y==0 || y==grid.length-1) {
                    newVisitedMap = explore(Number(x), Number(y), grid, newVisitedMap);
                }
            }
        }
    }

    return landCount - [...newVisitedMap].length;
};

const mainArray = [[0,0,0,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,1],[0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,1,1,1,1,1,0,0,1,0],[0,0,1,0,1,1,1,1,0,1],[0,1,1,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,1,0,1],[1,0,1,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1]];

for(let y in mainArray) {
    console.log(JSON.stringify(mainArray[y]));
}
console.log(numEnclaves(mainArray));