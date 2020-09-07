/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[len - j -1][i];
            matrix[len - j -1][i] = temp;
        }
        console.log(matrix)
    }
  };
  
  
  console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))