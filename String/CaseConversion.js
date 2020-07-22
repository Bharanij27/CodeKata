const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0];
    let type = userInput[1]=='1'? 'toLowerCase()': 'toUpperCase()';
    let index = +userInput[2];
    let res = '';
    for(let i=0; i<str.length; i++){
        let data;
        if((i+1)%index==0){
            let exp = '"'+str[i]+'".'+type;
            data =eval(exp);
        }
        data?res+=data:res+=str[i]
    }
    console.log(res);
});