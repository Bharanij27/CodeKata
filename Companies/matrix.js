// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    function change(ar, col, row){
    for(let i = 0; i < ar.length; i++){
        for(let j = 0; j < ar[i].length; j++){
            if(i==row || j == col) ar[i][j] = 0;
        }
    }
    return ar;
}

let arr = [];
let data = userInput[0].split(' ');
let row = data[0], col = data[1];

for(let i = 1; i <= row; i++){
    arr.push(userInput[i].split(' '));
}

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        if(arr[i][j]==='0') arr = change(arr,j,i);
    }
}

for(let i = 0; i < row; i++){
    console.log(arr[i].join(' '));
}

});