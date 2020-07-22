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
    function getResult(arr){
        return arr.sort(function(a,b){
            return +a - +b;
        });
    }
    
    let num = +userInput[0];
    let arr = [];
    let res = [];
    for(let i=1; i<=num; i++){
        let query = userInput[i].split(' ');
        if(query[0]==1) arr.push(+query[1]);
        else{
            arr = getResult(arr);
            arr.length!=0?res.push(arr[0]): res.push(-1);
        }
    }
    console.log(res.join(' '));
});