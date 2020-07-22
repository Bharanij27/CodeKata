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
    function isFake(pan){
        for(let i=0; i<panNum.length; i++){
            if(panNum[i]!=panNum[i].toUpperCase() || (isNaN(+panNum[i]) && (i>5 && i!=9))) return 1;
        }
        return 0;
    }
    
  let panNum = userInput[0];
  if(panNum.length!=10 || isFake(panNum)) console.log('not pan');
  else console.log('pan')
});