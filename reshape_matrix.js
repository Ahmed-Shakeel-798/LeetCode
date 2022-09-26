/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let rows = mat.length;
    let cols = mat[0].length;
    
    if((rows*cols) !== (r*c)){
        return mat;
    }
    
    let m = 0;
    let n = 0;
    let newMat = [];
    let temp_row = [];
    
    for(let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j ++) {
            temp_row.push(mat[i][j]);
            n++;
            if( n >= c){
                m++;
                n = 0;
                newMat.push(temp_row);
                temp_row = [];
            }
            
        }
    }
    return newMat;
};

let res = matrixReshape( [[1,2],[3,4]], 1, 4);
console.log(res);