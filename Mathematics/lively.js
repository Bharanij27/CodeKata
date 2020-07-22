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
    function isLively(obj){
        let arr = Object.values(obj);
        let islive = [...new Set(arr)]
        if(islive.length==1)return 1
        return 0;
    }
    
  let num = userInput[0].split('');
  let obj = {}
  num.forEach(data => {
      obj[data]? obj[data]++: obj[data]=1;
  })
  if(isLively(obj))console.log(1)
  else console.log(0)
});