const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    function isMirror(s1){
        let s2 = s1.reverse();
        for(let i=0;i<s1.length; i++)
        {
            if(s1[i]!=s2[i]){
                 console.log("no");
                 return 0
            }
        }
        console.log("yes")
        return 1;
    }
    let str = userInput[0].split('');
    if(str.join('')==str.reverse().join(''))console.log("yes");
    else console.log('no');
});	