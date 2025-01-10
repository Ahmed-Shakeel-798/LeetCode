function explore(currentCoordinates, grid, visitedMap) {
    // console.log("current coordinates: " + JSON.stringify(currentCoordinates));
    
    // base condition out of bounds.
    if( currentCoordinates.x < 0 || 
        currentCoordinates.x >= grid[0].length ||
        currentCoordinates.y < 0 ||
        currentCoordinates.y >= grid.length) {
            // console.log("notIsland");
            return "notIsland";
    } 

    // base condition water.
    if(grid[currentCoordinates.y][currentCoordinates.x] === 1){
        // console.log("water");
        return "water";
    }

    // base condition visited.
    if(visitedMap.has(currentCoordinates.x + ',' + currentCoordinates.y)) {
        // console.log("visited");
        return 'visited';
    }

    visitedMap.add(currentCoordinates.x + ',' + currentCoordinates.y);
    // console.log("pushed");

    const left = { x:  currentCoordinates.x - 1, y: currentCoordinates.y}
    const right = { x:  currentCoordinates.x + 1, y: currentCoordinates.y}
    const up = { x:  currentCoordinates.x, y: currentCoordinates.y - 1}
    const down = { x:  currentCoordinates.x, y: currentCoordinates.y + 1}

    const leftValue = explore(left, grid, visitedMap);
    const rightValue = explore(right, grid, visitedMap);
    const upValue = explore(up, grid, visitedMap);
    const downValue = explore(down, grid, visitedMap);

    // console.log("current coordinates were: " + JSON.stringify(currentCoordinates));
    // console.log("left value: " + JSON.stringify(left) + leftValue);
    // console.log("right value: " + JSON.stringify(left) + rightValue);
    // console.log("up value: " + JSON.stringify(left) + upValue);
    // console.log("down value: " + JSON.stringify(left) + downValue);


    if(leftValue === "notIsland" || rightValue === "notIsland" || upValue === "notIsland" || downValue === "notIsland" ){
        return "notIsland";
    }else{
        return "isIsland";
    }
}

let mainArray = [[1,1,1,1,1,1,1],
[1,0,0,0,0,0,1],
[1,0,1,1,1,0,1],
[1,0,1,0,1,0,1],
[1,0,1,1,1,0,1],
[1,0,0,0,0,0,1],
[1,1,1,1,1,1,1]];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    if(grid.length <= 0 && grid[0].length <= 0){
        return 0;
    }

    let closedIslands = 0;

    let visitedMap = new Set();

    for(let y in grid) {
        for(let x in grid[y]){
            // console.log("-------------");
            if(explore({x: Number(x), y: Number(y)}, grid, visitedMap) === "isIsland") {
                // console.log("adding closed island count for " + JSON.stringify({x: Number(x), y: Number(y)}));
                closedIslands+=1;
            }
        }
    }

    return closedIslands;
};

console.log(closedIsland(mainArray));