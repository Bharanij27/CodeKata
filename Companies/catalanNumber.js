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
    function biCoeff(n ,k){
        let res = 1;
        if(k > n-k) k = n-k;
        for(let i = 0; i < k; ++i){
            res *= (n - i);
            res /= (i + 1);
        }
        return res;
    }
    
    let num = +userInput[0];
    let res = [];
    for(let i=0; i<=num; i++){
        let catalan = biCoeff(2*i, i);
        res.push(catalan / (i+1));
    }
    console.log(res.join(' '));
});