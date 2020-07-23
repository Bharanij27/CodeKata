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
    let str = userInput[0].split('');
    let obj = {};
    str.forEach(data => obj[data]? obj[data]++: obj[data]=1);
    let arr = [];
    for(let i in obj){
        arr.push([i,obj[i]]);
    }
    arr.sort(function(a,b){
        return b[1] == a[1]? a[0]-b[0]: b[1] - a[1]; 
    });
    let res = '';
    arr.forEach(data =>{
        let charArr = new Array(data[1]);
        charArr.fill(data[0], 0, data[1]);
        res+=charArr.join('');
    });
    console.log(res);
});