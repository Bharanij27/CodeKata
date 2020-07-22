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
  let data = userInput[0].split(' ');
  let row = data[0], col = data[1];
  let arr = [];
  for(let i=1; i<=row; i++){
      arr = arr.concat(userInput[i].split(' '));
  }

  arr.sort(function(a,b){
      return +a - +b;
  });
  

  let res = [], i=0;
  while(arr.length!=0){
      let resArr = arr.splice(0, col);
      i+=col;
      console.log(resArr.join(' '));
  }
});