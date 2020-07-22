const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let str = userInput[0];
    let paranthesis = [];
    let openParen = ['{','[','('];
    if(str.length%2!=0){
        console.log(0)
    }
    else{
        for(let i=0;i<str.length;i++){
            if(openParen.includes(str[i])) paranthesis.unshift(str[i]);
            else{
                if((paranthesis[0]=='(' && str[i]==')') || (paranthesis[0]=='[' && str[i]==']') || (paranthesis[0]=='{' && str[i]=='}')) paranthesis.shift()
            }
        }
        
    if(paranthesis.length!=0)console.log(0)
    else console.log(1)
    }
});