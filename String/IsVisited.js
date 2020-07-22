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
    let isReached = false;
    let data = userInput[0].split(' ');
    let n = data[0], m = data[1];
    for(let i=1; i<=n; i++){
        let points = userInput[i].split(' ');
        if(points[1] == m){
            isReached = true;
            console.log('yes');
            break;
        }
    }
    if(!isReached)console.log('no');
});