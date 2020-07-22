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
    function get(arr, ele){
        for(let i=0; i<arr.length; i++){
            if(+arr[i] < ele) return i+1;
        }
        return arr.length+1;
    }
  let arr1 = userInput[1].split(' ');
  let arr2 = userInput[3].split(' ');

  let res = [];
  for(let i=0; i<arr2.length; i++){
      res.push(get(arr1,+arr2[i]));
  }

  console.log(res.join(' '));
});