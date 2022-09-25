function find_path(t_map, row, col, curr_steps){
    if(row >= t_map.length || row < 0 || col >= t_map[0].length  || col < 0 || t_map[row][col] == 0 || t_map[row][col] == 2 ){
        return Infinity;
    }
    
    if(t_map[row][col] == 9){
        curr_steps += 1;
        return curr_steps;
    }


    let tmp = t_map[row][col]
    t_map[row][col] = 2;
    curr_steps += 1;
    left = find_path(t_map, row, col-1, curr_steps)
    right = find_path(t_map, row, col+1, curr_steps)
    up = find_path(t_map, row-1, col, curr_steps)
    down = find_path(t_map, row+1, col, curr_steps)

    t_map[row][col] = tmp

    return Math.min(left, right, up, down);
}

let t_map = [[1, 1, 1, 1],
[0, 1, 1, 1],
[0, 1, 0, 1],
[1, 1, 9, 1],
[0, 0, 1, 1]]

let res = find_path(t_map , 0, 0, 0);
console.log(res-1);