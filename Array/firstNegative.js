const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let size = +userInput[2];
    let arrLen = +userInput[0];
    let arr = userInput[1].split(' ')
    let res = []
    for(let i=0; i<=arrLen-size; i++){
        let slicedArr = arr.slice(i,i+size);
        let data = slicedArr.find(each =>each<0);
        data!=undefined? res.push(data): res.push(0)
    }
    console.log(res.join(' '))
})