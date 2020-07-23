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
    let res = [];
    let last;
    let i=0;
    while(i<str.length){
        if(isNaN(str[i])){
            last = str[i];
            res.push(str[i]);
            i++;
        }
        let index = i;
        let num = '';
        while(str[i] && !isNaN(+str[i])){
            num+=str[i];
            i++;
        }
        if(num && num%2==0){
            let arr = new Array(num-1).fill(last);
            res = res.concat(arr);
        }
        else res.push(num);
    }
    console.log(res.join(''))
});