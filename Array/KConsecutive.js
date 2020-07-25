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
    function isSame(len, k){
        let count = 1;
        for(let i = 1; i < len; i++){
            if(userInput[i] == userInput[i+1]) count++;
            if(count == k) return 1;
        }
        return(count == k);
    }
    
    let data = userInput[0].split(' ');
    let len = data[0], k = data[1];
    if(isSame(len, k)) console.log('yes');
    else console.log('no');
});