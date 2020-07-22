const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let arr = userInput[1].split(' ');
    let max = -1000;
    let min = +10000000000;
    for(let i=0;i<arr.length;i++){
        let str = (i%2==0)?'<':'>';
        let data = arr[i]
        for(let j=i+1;j<arr.length;j++){
            let compare = arr[i]+str+arr[j];
            if(eval(compare)){
                [data,arr[j]] = [arr[j],data]
            }
        }
        arr[i] = data
    }
    console.log(arr.join(' '))
});