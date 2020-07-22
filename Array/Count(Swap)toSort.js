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
    let arr = userInput[1].split(' ');
    let count = 0;
    for(let i=0; i<arr.length; i++){
        let min = [+arr[i],-1];
        //let innerMin = [arr[i+1],-1]
        for(let j=i+1; j<arr.length; j++){
            if(min[0]>+arr[j])min=[+arr[j],j];
        }
        if(min[0]!=arr[i]){
            let temp = arr[i];
            arr[i] = arr[min[1]];
            arr[min[1]] = temp;
            count++;
        }
    }
    console.log(count)
});