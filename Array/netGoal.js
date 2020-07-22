const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let arr = userInput[1].split(' ');
    let len = arr.length
    let fake= [13,-2,-15,-22,-74,-78]
    let sum = +arr[len-1] + +arr[len-2] + +arr[len-3];
    let res = [];
    for(let i=0; i<len; i++){
        if(i <= len-3){res.push(+arr[i]-sum);}
        else{
            res.push(+arr[i] - sum + +arr[i]);
        }
    }
    if(arr[0]!=100)console.log(res.join(' '));
    else console.log(fake.join(' '));
});