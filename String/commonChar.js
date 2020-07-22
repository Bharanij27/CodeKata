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
    function find(first, second){
        let reg = new RegExp(second);
        let res = first.match(reg);
        if(res) return 1;
        return 0;
    }
  let strings = userInput[0].split(' ');
  let res
  if(strings[0].length > strings[1].length) res=find(strings[0], strings[1]);
  else res= find(strings[1], strings[0]);
  if(res) console.log('yes');
  else console.log('no')
});