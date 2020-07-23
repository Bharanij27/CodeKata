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
    let input1 = userInput[0].split(' ')
    let str = input1[0].split('');
    if(input1[1]!=0){
        let k = +input1[1];
        for(let i=k-1;i<str.length;i+=k){
            str[i]=str[i].toUpperCase()
        }
    }
    console.log(str.join(''))
})