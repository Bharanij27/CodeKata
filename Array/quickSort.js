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
  function quickSort(arr){
      if(arr.length <= 1) return arr
      
      let pivot = arr.pop();
      let leftArr = [];
      let rightArr = [];
      let sortedArr = [];
      
      for(let i = 0; i < arr.length; i++){
          if(arr[i] <= pivot) leftArr.push(arr[i]);
          else rightArr.push(arr[i]);
      }
      return sortedArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
  }
  function convertToNum(arr){
      return arr.map(data => +data)
  }
  let arr1 = userInput[1].split(' ');
  let arr2 = userInput[2].split(' ');
  
  arr1 = convertToNum(arr1);
  arr2 = convertToNum(arr2);
  
  let arr = [];
  arr = arr.concat(arr1, arr2);
  arr = quickSort(arr);
  console.log(arr.join(' '));
});