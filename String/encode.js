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
  let res='';
  let data = userInput[0];
  for(let i=0; i<data.length;i++){
      let ascii = data.charCodeAt(i);
      ascii+=3;
      if((ascii<95&&ascii>90) || (ascii>95&&ascii>122)) ascii-=26;
      res+=String.fromCharCode(ascii);
  }
  console.log(res);
});