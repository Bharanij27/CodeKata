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
    function binarySearch(arr, l, r, x){
        while (l <= r) { 
        let m = l + (r - l) / 2; 

        if (arr[m] == x || arr[l] == x || arr[r] == x) 
            return 'yes'; 
  
        if (arr[m] < x) 
            l = m + 1; 
  
        else
            r = m - 1; 
    } 
  
    return 'no'; 
    }
    let data = userInput[0].split(' ');
    let element = +data[1];
    let arr = userInput[1].split(' ');
    let res = binarySearch(arr, 0, +data[0]-1, element);
    console.log(res);
});