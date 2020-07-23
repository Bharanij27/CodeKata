// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on('close',()=>{
    let num = +userInput[0];
    let cnt = 0;
    for(let i=1;i<num+1;i++){
        let str = userInput[i];
        if(/[aeiou]/gi.test(str)) cnt++;
    }
    cnt==num? console.log('yes'): console.log('no')
})