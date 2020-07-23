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
    function isPrime(num){
        for(let i = 2, s = Math.sqrt(num); i <= s; i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    let num = +userInput[0];
    let res = [];
    for(let i = 2; i < num; i++){
        if(isPrime(i)) res.push(i);
    }
    console.log(res.join(' '));

});