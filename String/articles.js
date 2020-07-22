const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let str = userInput[0].split(' ');
    let res = []
    let articles = ['the','a','an']
    for(let i=0;i<str.length;i++){
        if(articles.includes(str[i].toLowerCase())){
            res.push(str[i+1])
        }
    }
    if(res.length==0)console.log(-1)
    else console.log(res.join(' '))
});