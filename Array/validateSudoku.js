
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return isTableValid(board)
  };
  
  function isTableValid(board){
    let grid = [[0, 0], [3, 0], [6, 0], [0, 3], [3, 3], [6, 3], [0, 6], [3, 6], [6, 6]]
    for(let i = 0; i < 9; i++){
        if(!rowValidation(board, i, true)) return false;
    }
  
    for(let i = 0; i < 9; i++){
        if(!colValidation(board, i, true)) return false;
    }
  
    for(let i = 0; i < 9; i++){
        if(!gridValidation(board, grid[i][0], grid[i][1])) return false;
    }
  
    return true;
  }
  
  let rowIndex, colIndex;
  
  
  //                  Check is the number valid on entering
  function isValid(id){
    [rowIndex, colIndex] = id.split('');
    return rowValidation(rowIndex) && colValidation(colIndex) && gridValidation(rowIndex, colIndex);
  }
  
  
  //              Checks value is valid in row manner
  
  function rowValidation(tableContent, rowIndex){
    let row = tableContent[rowIndex].filter(number => number!='.');
    let unique = [...new Set(row)];
    return row.length == unique.length;
  }
  
  
  //              Checks value is valid in column manner
  
  function colValidation(tableContent, colIndex){
    let col = [];
    for(let i = 0; i < 9; i++){
        let value= tableContent[i].filter((number, index) =>{
            if(index == +colIndex && number != '.') return number
        });
        if(value.length) col.push(value[0]);
    }
    let unique = [...new Set(col)];
    return col.length == unique.length;
  }
  
  //          Return which grid the number cell belongs to
  
  function checkGrid(index){
    if(index < 3) return [0, 2];
    else if(index < 6) return [3, 5];
    return [6, 8];
  }
  
  //              Checks value is valid in grid manner
  
  function gridValidation(tableContent, rowIndex, colIndex){
    let rowLimit = checkGrid(rowIndex);
    let colLimit = checkGrid(colIndex);
    let grid = [];
    for(let i = rowLimit[0]; i <= rowLimit[1] ; i++){
        for(let j = colLimit[0]; j <= colLimit[1]; j++){
            tableContent[i][j] != '.' && grid.push(tableContent[i][j]);
        }
    }
    let unique = [...new Set(grid)];
    return grid.length == unique.length;
  }
  
  
  
  let table = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
  console.log(isValidSudoku(table));