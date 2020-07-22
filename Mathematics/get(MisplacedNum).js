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
  function find(arr){
      let count = 0;
      let x = 0;
      for(let i=0; i<arr.length; i++){
          for(let j=i; j<arr.length; j++){
              if(arr[i]>arr[j]){
                  count++;
                  x = i;
                  [arr[i], arr[j]] = [arr[j], arr[i]]
              }
              if(count > 1) return 0;
          }
      }
      return [x]; 
  }
  
  let arr = userInput[1].split(' ');
  let res = find(arr);
  if(res!=0)console.log(res[0])
  else console.log(-1)
});