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
    function isRepeat(count){
        for(let i in count){
            if(count[i]>1) return 1;
        }
        return 0;
    }
    
    let num = userInput[0].split('');
    let obj = {};
    num.forEach(data =>{
        obj[data]? obj[data]++: obj[data] = 1;
    });
    if(isRepeat(obj)) console.log('yes');
    else console.log('no');
});